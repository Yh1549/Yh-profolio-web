<script setup>
import { ref } from "vue";
import BioList from "../components/BioList.vue";
import Card from "../components/Card.vue";
import CodeMockup from "../components/CodeMockup.vue";
// const path1 = require("../assets/cat-icon.jpg");
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
  {
    year: "2023 ~ now",
    content: "Yuanta bank, Java Developer",
  },
];
const skillListFront = [
  { name: "Javascript", code: "alert('Hello World!')" },
  { name: "Html/Css", code: "<h1>Hello World!</h1>" },
  { name: "Tailwind CSS", code: "npx tailwindcss init -p" },
  { name: "Vuejs", code: "app.use()" },
  { name: "vue-router", code: "app.use(CreateRouter())" },
  { name: "pinia", code: "app.use(createPinia())" },
  { name: "Axios", code: "axios.get('https://')" },
  { name: "astro", code: "npm create astro@latest" },
];
const skillListBack = [
  { name: "Java", code: "System.out.println('Hello World!')" },
  { name: "Spring boot 3", code: "@RestController" },
  { name: "Redis", code: "PING 'PONG'" },
  { name: "PostgreSQL", code: "SELECT * FROM table_name" },
  { name: "Azure devops", code: "ADO" },
];
const skillList = [
  { name: "Nginx", code: "nginx -s reload" },
  { name: "Git", code: "git commit -m 'hello'" },
  { name: "AlmaLinux", code: "systemctl start service" },
  { name: "Jenkins", code: "apt-get install jenkins" },
];
const works = [];
const code = ref("Hello world!");
</script>
<template>
  <div class="flex flex-col">
    <div class="alert alert-info my-4">
      <span>Hello!, Welcome!</span>
    </div>
    <div class="my-2 flex justify-between">
      <div>
        <h1 class="font-bold text-2xl">Zheng Yi Hong / 鄭翊宏</h1>
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
      <div class="flex justify-between items-center opacity-80">
        <h2 class="font-bold text-2xl my-2">
          {{ $t("message.title.aboutme") }}
        </h2>
        <p>cpeter618@gmail.com</p>
      </div>
      <p class="my-8 text-sm" v-html="$t('message.about.content')"></p>
      <div class="text-center my-2">
        <router-link class="btn btn-primary" :to="{ name: 'Works' }"
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
      <h2 class="font-bold text-2xl my-2">{{ $t("message.title.bio") }}</h2>
      <BioList v-for="item of BioContent" :key="item">
        <template #year>{{ item.year }}</template>
        <template #content> {{ item.content }}</template>
      </BioList>
    </section>
    <div class="divider"></div>
    <section>
      <h2 class="font-bold text-2xl my-2">Skills</h2>
      <div class="my-4 flex flex-wrap">
        <div class="w-full md:w-1/3 flex gap-2 justify-center flex-wrap my-2">
          <span
            v-for="item of skillListFront"
            :key="item"
            class="badge badge-primary badge-lg hover:badge-accent"
            @mouseenter="code = item.code"
            >{{ item.name }}</span
          >
        </div>
        <div class="w-full md:w-1/3 flex gap-2 justify-center flex-wrap my-2">
          <span
            v-for="item of skillListBack"
            :key="item"
            class="badge badge-primary badge-lg hover:badge-accent"
            @mouseenter="code = item.code"
            >{{ item.name }}</span
          >
        </div>
        <div class="w-full md:w-1/3 flex gap-2 justify-center flex-wrap my-2">
          <span
            v-for="item of skillList"
            :key="item"
            class="badge badge-primary badge-lg hover:badge-accent"
            @mouseenter="code = item.code"
            >{{ item.name }}</span
          >
        </div>
      </div>
      <CodeMockup class="block" :code="code" />
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
      <p class="text-base">
        Bicycle, <span class="text-emerald-900">Planet</span>, Movie, Coding,
        Gaming, Yamashita Tatsurō
      </p>
    </section>
    <div class="divider"></div>
    <section>
      <h2 class="font-bold text-2xl my-2">Me on the web</h2>
      <a href="https://github.com/Yh1549" class="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 496 512"
          class="fill-current w-5 h-5"
        >
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          /></svg
        >My Github
      </a>
      <div class="flex flex-wrap">
        <Card v-for="item of works" :key="item.title" :imgSrc="item.imgSrc">
          <template #title>{{ item.title }}</template>
          <template #content>{{ item.content }}</template>
        </Card>
      </div>
    </section>
  </div>
</template>
