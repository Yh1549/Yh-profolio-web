<script setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
</script>
<template>
  <Header />
  <div class="max-w-3xl mx-auto px-4">
    <router-view></router-view>
  </div>
  <Footer />
</template>
