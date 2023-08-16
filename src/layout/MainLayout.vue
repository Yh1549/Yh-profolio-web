<script setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import ThreeD from "../components/ThreeD.vue";
</script>
<template>
  <Header />
  <div class="max-w-3xl mx-auto px-4">
    <ThreeD></ThreeD>
    <div class="relative -top-20">
      <router-view></router-view>
    </div>
  </div>
  <Footer />
</template>
