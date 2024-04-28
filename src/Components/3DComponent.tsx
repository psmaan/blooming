import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TweenMax } from "gsap";

const ThreeDVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth / 1.5;
    const height = window.innerHeight > width ? width + 50 : window.innerHeight;

    // Create and configure the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    mountRef.current!.appendChild(renderer.domElement);

    // Setup camera
    const camera = new THREE.PerspectiveCamera(35, width / height, 1, 1000);
    camera.position.set(0, 0, 10);

    // Setup scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0, 5, 15);
    scene.background = new THREE.Color(0);

    // Add lighting
    const light = new THREE.HemisphereLight(16777215, 0, 1.4);
    scene.add(light);

    // Example mesh
    const e = new THREE.IcosahedronGeometry(1, 6);
    const s = {
        time: { type: "f", value: 1 },
        pointscale: { type: "f", value: 1 },
        decay: { type: "f", value: 2 },
        complex: { type: "f", value: 2 },
        waves: { type: "f", value: 3 },
        eqcolor: { type: "f", value: 3 },
        fragment: { type: "i", value: !1 },
        dnoise: { type: "f", value: 0 },
        qnoise: { type: "f", value: 4 },
        r_color: { type: "f", value: 0 },
        g_color: { type: "f", value: 0 },
        b_color: { type: "f", value: 0 },
      },
      c = {
        perlin: {
          vel: 0.002,
          speed: 2e-4,
          perlins: 1,
          decay: 0.4,
          complex: 0,
          waves: 10,
          eqcolor: 7,
          fragment: !1,
          redhell: !0,
        },
        rgb: { r_color: 6, g_color: 0, b_color: 0.2 },
        cam: { zoom: 6 },
      },
      d = Date.now();

    const f = () => {
      requestAnimationFrame(f);
      TweenMax.to(camera.position, 1, { z: c.cam.zoom + 5 }); // Corrected from o.position to camera.position
      mesh.rotation.y += 0.001;
      shader.uniforms.time.value = c.perlin.speed * (Date.now() - d);
      shader.uniforms.pointscale.value = c.perlin.perlins;
      shader.uniforms.decay.value = c.perlin.decay;
      shader.uniforms.complex.value = c.perlin.complex;
      shader.uniforms.waves.value = c.perlin.waves;
      shader.uniforms.eqcolor.value = c.perlin.eqcolor;
      shader.uniforms.r_color.value = c.rgb.r_color;
      shader.uniforms.g_color.value = c.rgb.g_color;
      shader.uniforms.b_color.value = c.rgb.b_color;
      shader.uniforms.fragment.value = c.perlin.fragment;
      renderer.render(scene, camera);
    };

    const p = (e: any) => {
      const t = document.documentElement;
      c.rgb = {
        r_color: 6,
        g_color: Math.abs((4 * e.clientX) / t.offsetWidth - 3.8),
        b_color: Math.abs((4 * e.clientY) / t.offsetHeight - 0.2),
      };
    };

    const v = () => {
      const e = window.innerWidth;
      let t = document.documentElement;

      e >= 1025 && t.addEventListener("mousemove", p, !1),
        e < 1025 && t.removeEventListener("mousemove", p, !1);
    };

    const mesh = new THREE.Object3D();
    let shader = new THREE.ShaderMaterial({
      wireframe: !1,
      uniforms: s,
      vertexShader: document.getElementById("vertexShader")
        ?.textContent as string,
      fragmentShader: document.getElementById("fragmentShader")
        ?.textContent as string,
    });
    const t = new THREE.Mesh(e, shader);
    mesh.add(t);
    scene.add(mesh);
    mesh.scale.set(1, 1, 1);

    const spotLight = new THREE.PointLight(16777215, 0.5);
    spotLight.position.set(20, 20, 20);
    scene.add(spotLight);
    f();
    v();
    // Animation loop

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="w-min" ref={mountRef} />;
};

export default ThreeDVisual;
