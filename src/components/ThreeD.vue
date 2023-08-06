<script setup>
import * as THREE from "three";
import { onBeforeMount, onMounted } from "vue";
// const ThreeDView = ref(null);
onBeforeMount(() => {
  const ThreeDView = document.getElementById("ThreeDView");
});

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(ThreeDView.offsetWidth, ThreeDView.offsetHeight);
  ThreeDView.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(3, 3, 3);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  scene.background = null;

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  const handleWindowResize = () => {
    const scw = ThreeDView.offsetWidth;
    const sch = ThreeDView.offsetHeight;
    renderer.setSize(scw, sch);
  };
  window.addEventListener("resize", handleWindowResize, false);
});
</script>
<template>
  <div id="ThreeDView" class="w-full h-[300px]"></div>
</template>
