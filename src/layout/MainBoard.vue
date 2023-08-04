<script setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
</script>
<template>
  <Header />
  <div class="w-full md:w-3/4 flex flex-col gap-4 mx-auto px-4">
    <router-view></router-view>
  </div>
  <Footer />
</template>
