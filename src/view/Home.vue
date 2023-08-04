<script setup>
// import * as THREE from "three";
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();
</script>
<template>
  <div class="flex flex-col w-full">
    <div class="p-2 grid card bg-base-300 rounded-md place-items-center">
      <span class="text-sm"> Hello!, I'm a back-end Developer </span>
    </div>
  </div>

  <section class="my-2 flex justify-between">
    <div>
      <h1 class="font-bold text-2xl">Zheng Yi Hong</h1>
      <p class="text-sm opacity-40">Back-End Developer</p>
    </div>
    <div class="avatar">
      <div
        class="mx-auto w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      >
        <img src="../assets/tired-catpng.png" />
      </div>
    </div>
  </section>
  <section class="w-full flex flex-col gap-4">
    <h2 class="font-bold text-2xl">About ME</h2>
    <p class="text-sm">
      Takuya is a freelance and a full-stack developer based in Osaka with a
      passion for building digital services/stuff he wants. He has a knack for
      all things launching products, from planning and designing all the way to
      solving real-life problems with code. When not online, he loves hanging
      out with his camera. Currently, he is living off of his own product called
      Inkdrop. He publishes content for marketing his products and his YouTube
      channel called "Dev as Life" has more than 100k subscribers.
    </p>
    <div class="text-center">
      <router-link class="btn btn-primary" :to="{ name: 'Work' }"
        >Checkout My Work
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          /></svg
      ></router-link>
    </div>
  </section>
  <section class="">
    <h2>Bio</h2>
    <p>
      <span class="mr-6 font-extrabold border-b-2">1994</span>
      <span class="font-semibold">Born in Taoyoun(桃園), Taiwan</span>
    </p>
    <p>
      <span class="mr-6 font-extrabold border-b-2">2016</span>
      <span class="font-semibold"
        >Completed the Master's Program in the Graduate School of Information
        Science at Nara Institute of Science and Technology
        (奈良先端科学技術大学院大学情報科学研究科修士課程)</span
      >
    </p>
    <p>
      <span class="mr-6 font-extrabold font-fira">2022</span>
      <span class="font-semibold"
        >Union Bank Of Taiwan, Front-end Developer</span
      >
    </p>
    <p>
      <span class="mr-6 font-extrabold font-fira">2023</span>
      <span class="font-semibold"
        >Union Bank Of Taiwan, Back-end Developer(Java)</span
      >
    </p>
  </section>
  <section>
    <h2 class="flex">
      <span class="px-2">I</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        class="fill-red-600 self-center"
      >
        <path
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
        />
      </svg>
    </h2>
    <p>Bicycle, Planet, Movie, Coding, Gaming</p>
  </section>
  <section>
    <h2>My Link</h2>
    <ul>
      <li>github</li>
      <li>facebook</li>
      <li>cakeresume</li>
    </ul>
  </section>
</template>
