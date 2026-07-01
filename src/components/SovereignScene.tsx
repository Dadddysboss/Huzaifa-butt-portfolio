'use client';

import { useEffect, useRef } from 'react';
import type { Mesh, MeshStandardMaterial } from 'three';

const WORKER_CODE = `
self.onmessage = function (e) {
  const { nodes, width, height, isHighPerf } = e.data;
  const count = nodes.length;
  const spread = isHighPerf ? 60 : 35;
  const positions = new Float32Array(count * 3);
  const rotations = new Float32Array(count);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = spread * Math.cbrt(Math.random() * 0.8 + 0.2);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.cos(phi);
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    rotations[i] = Math.random() * Math.PI * 2;
    speeds[i] = 0.002 + Math.random() * 0.008;
  }
  self.postMessage({ positions: positions.buffer, rotations, speeds, count }, [positions.buffer]);
};
`;

function detectHardware() {
  if (typeof window === 'undefined') return false;
  const cores = navigator.hardwareConcurrency || 0;
  const mem = (navigator as any).deviceMemory || 0;
  const w = window.innerWidth;
  const conn = (navigator as any).connection;
  const saveData = conn?.saveData === true;
  const slowConn = conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g';
  return cores >= 6 && mem >= 4 && w >= 1024 && !saveData && !slowConn;
}

export default function SovereignScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const container = containerRef.current;
    if (!container) return;

    const isHighPerf = detectHardware();

    async function init() {
      const c = container;
      if (!c) return;
      const THREE = await import('three');
      const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
      const { CSS2DRenderer, CSS2DObject } = await import('three/addons/renderers/CSS2DRenderer.js');

      const w = c.clientWidth || window.innerWidth;
      const h = c.clientHeight || window.innerHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0e17);

      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 500);
      camera.position.set(0, 10, 50);

      const renderer = new THREE.WebGLRenderer({ antialias: isHighPerf, alpha: false });
      renderer.setSize(w, h);
      renderer.setPixelRatio(isHighPerf ? Math.min(window.devicePixelRatio, 2) : 1);
      c.appendChild(renderer.domElement);

      const labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(w, h);
      labelRenderer.domElement.style.position = 'absolute';
      labelRenderer.domElement.style.top = '0';
      labelRenderer.domElement.style.left = '0';
      labelRenderer.domElement.style.pointerEvents = 'none';
      c.appendChild(labelRenderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
      controls.maxDistance = 120;
      controls.minDistance = 15;

      const ambient = new THREE.AmbientLight(0x404060);
      scene.add(ambient);
      const dirLight = new THREE.DirectionalLight(0x41c0f2, 2);
      dirLight.position.set(10, 20, 10);
      scene.add(dirLight);
      const backLight = new THREE.DirectionalLight(0x6366f1, 1);
      backLight.position.set(-10, -10, -10);
      scene.add(backLight);

      const nodes = document.querySelectorAll('.capability-node');
      const nodeData: { title: string; body: string }[] = [];
      nodes.forEach((n) => {
        const h2 = n.querySelector('h2');
        const p = n.querySelector('p');
        nodeData.push({
          title: h2?.textContent || 'Capability Node',
          body: p?.textContent || '',
        });
      });

      const worker = new Worker(URL.createObjectURL(new Blob([WORKER_CODE], { type: 'application/javascript' })));
      const count = Math.max(nodeData.length, 1);

      const particles: Mesh[] = [];
      const labelGroup = new THREE.Group();
      scene.add(labelGroup);

      worker.onmessage = (e: MessageEvent) => {
        const { positions, rotations, speeds } = e.data;
        const posArray = new Float32Array(positions);

        for (let i = 0; i < count; i++) {
          const color = new THREE.Color().setHSL(0.55 + i * 0.02, 0.7, 0.5);
          const geo = new THREE.OctahedronGeometry(isHighPerf ? 0.8 : 0.6, 0);
          const mat = new THREE.MeshStandardMaterial({
            color,
            metalness: 0.3,
            roughness: 0.4,
            emissive: color,
            emissiveIntensity: 0.15,
          });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2]);
          mesh.userData = { rotY: rotations[i], speed: speeds[i], index: i };
          scene.add(mesh);
          particles.push(mesh);

          const div = document.createElement('div');
          div.className = 'sovereign-label';
          div.innerHTML = `<div class="label-title">${nodeData[i]?.title?.substring(0, 60) || 'Node ' + (i + 1)}</div><div class="label-body">${nodeData[i]?.body?.substring(0, 180) || ''}</div>`;
          div.style.cssText = `
            background: rgba(10,14,23,0.92);
            border: 1px solid rgba(65,192,242,0.3);
            border-radius: 12px;
            padding: 12px 16px;
            max-width: 320px;
            color: #e2e8f0;
            font-family: ui-monospace, monospace;
            font-size: 11px;
            line-height: 1.5;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(8px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          `;
          const labelObj = new CSS2DObject(div);
          labelObj.position.copy(mesh.position);
          labelObj.position.y += 2.5;
          labelGroup.add(labelObj);

          mesh.userData.label = labelObj;
          mesh.userData.hovered = false;
        }

        worker.terminate();
      };

      worker.postMessage({ nodes: nodeData, width: w, height: h, isHighPerf });

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      let hoveredMesh: Mesh | null = null;

      function onPointerMove(event: PointerEvent) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
      renderer.domElement.addEventListener('pointermove', onPointerMove);

      function animate() {
        requestAnimationFrame(animate);

        if (particles.length > 0) {
          const time = Date.now() * 0.0003;
          particles.forEach((p, i) => {
            const data = p.userData;
            p.rotation.x += data.speed * 0.5;
            p.rotation.y += data.speed;
            p.position.y += Math.sin(time + i) * 0.002;
            p.position.x += Math.cos(time * 0.7 + i * 0.5) * 0.001;
          });

          raycaster.setFromCamera(pointer, camera);
          const intersects = raycaster.intersectObjects(particles);
          if (hoveredMesh && hoveredMesh.userData.label) {
            hoveredMesh.userData.label.element.style.opacity = '0';
            (hoveredMesh.material as MeshStandardMaterial).emissiveIntensity = 0.15;
          }
          if (intersects.length > 0) {
            const hit = intersects[0].object as Mesh;
            if (hit.userData.label) {
              hit.userData.label.element.style.opacity = '1';
              (hit.material as MeshStandardMaterial).emissiveIntensity = 0.6;
              hoveredMesh = hit;
            }
          } else {
            hoveredMesh = null;
          }
        }

        controls.update();
        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
      }
      animate();

      let resizeTimer: ReturnType<typeof setTimeout>;
      function onResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const el = c;
          if (!el) return;
          const cw = el.clientWidth || window.innerWidth;
          const ch = el.clientHeight || window.innerHeight;
          camera.aspect = cw / ch;
          camera.updateProjectionMatrix();
          renderer.setSize(cw, ch);
          labelRenderer.setSize(cw, ch);
        }, 100);
      }
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
        renderer.domElement.removeEventListener('pointermove', onPointerMove);
        controls.dispose();
        renderer.dispose();
        labelRenderer.domElement.remove();
        particles.forEach((p) => {
          p.geometry.dispose();
          (p.material as MeshStandardMaterial).dispose();
        });
        while (c.firstChild) c.removeChild(c.firstChild);
      };
    }

    let cleanup: (() => void) | undefined;
    init().then((fn) => {
      cleanup = fn;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-js-canvas"
      className="w-full h-[80vh] lg:h-screen relative overflow-hidden rounded-[32px] border border-blue-100/80 shadow-2xl shadow-sky-200/20"
      style={{ aspectRatio: '16 / 9' }}
    />
  );
}
