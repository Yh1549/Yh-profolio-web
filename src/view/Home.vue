<script setup>
import { ref } from "vue";
import BioList from "../components/BioList.vue";
import CodeMockup from "../components/CodeMockup.vue";

const BioContent = [
  {
    year: "1994",
    content: "Born in Taoyoun(桃園), Taiwan",
  },
  {
    year: "2022",
    content: "Union Bank Of Taiwan, Front-end Developer",
  },
  {
    year: "2023",
    content: "Union Bank Of Taiwan, back-end Developer",
  },
];
const skillList = [
  { name: "Java", code: "System.out.println('Hello World!')" },
  { name: "JavaFX", code: "System.out.println('Hello World!')" },
  { name: "Spring boot 3", code: "javac HelloWorld.java" },
  { name: "DB2", code: "javac HelloWorl.java" },
  { name: "PostgreSQL", code: "javac HelloWorl.java" },
  { name: "Javascript", code: "alert('Hello World!')" },
  { name: "Vuejs", code: "alert('Hello World!')" },
  { name: "sevlet", code: "alert('Hello World!')" },
  { name: "astro", code: "alert('Hello World!')" },
];
const code = ref("Hello world!");

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
  <h1 class="text-4xl text-center">Work In Progress....</h1>

  <div class="flex flex-col w-full">
    <div class="p-2 grid card bg-base-300 rounded-md place-items-center">
      <span class="text-sm"> Hello!, I'm a back-end Developer </span>
    </div>
  </div>

  <div class="my-2 flex justify-between">
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
  </div>

  <section class="w-full">
    <h2 class="font-bold text-2xl my-2">About Me</h2>
    <p class="text-sm indent-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni autem
      culpa alias error similique, labore odio eos a atque exercitationem
      architecto, consectetur molestias aliquam dolor possimus reprehenderit.
      Officia, cupiditate perferendis? Voluptas necessitatibus alias eaque
      delectus saepe tempore sit eius, iusto labore maxime repellat architecto
      molestiae corrupti ab nisi similique autem dolor excepturi fuga odio
      quisquam! Neque necessitatibus numquam vero aperiam! Numquam impedit ea
      harum nihil. Maiores optio vitae corrupti maxime consequatur pariatur
      nobis similique, repellendus molestias veritatis suscipit, libero, nostrum
      corporis consectetur quasi sapiente aliquid asperiores sit dolorem enim.
      Eveniet. Odit at dolores facere, officia quia aspernatur commodi aliquid
      placeat amet blanditiis ad ut eum dolorem excepturi, ipsum molestiae fugit
      mollitia, temporibus aperiam eius? Cumque modi quod laboriosam sed
      officia.
    </p>
    <div class="text-center my-2">
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
  <div class="divider"></div>

  <section class="w-full">
    <h2 class="font-bold text-2xl my-2">Bio</h2>
    <BioList v-for="item of BioContent" :key="item">
      <template #year>{{ item.year }}</template>
      <template #content> {{ item.content }}</template>
    </BioList>
  </section>
  <div class="divider"></div>
  <section>
    <h2 class="font-bold text-2xl my-2">Skills</h2>
    <div class="my-4">
      <div class="flex gap-2 flex-wrap my-2">
        <span
          v-for="item of skillList"
          :key="item"
          class="badge badge-secondary badge-lg hover:badge-accent"
          @mouseenter="code = item.code"
          >{{ item.name }}</span
        >
      </div>
      <CodeMockup class="hidden lg:block" :code="code" />
    </div>
  </section>
  <div class="divider"></div>
  <section>
    <h2 class="font-bold text-2xl my-2">Some of my Work</h2>
  </section>
  <div class="divider"></div>

  <section class="w-full">
    <h2 class="flex my-2 text-2xl">
      <span class="px-2">I</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        class="fill-current self-center"
      >
        <path
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
        />
      </svg>
    </h2>
    <p class="text-xl font-bold indent-4">
      Bicycle, <span class="text-emerald-900">Planet</span>, Movie, Coding,
      Gaming, Yamashita Tatsurō, Keyboard Building,
    </p>
  </section>
  <div class="divider"></div>

  <section class="w-full">
    <h2 class="font-bold text-2xl my-2">My Link</h2>
    <ul>
      <li>github</li>
      <li>facebook</li>
      <li>cakeresume</li>
    </ul>
  </section>
</template>
