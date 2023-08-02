<script setup>
import Header from "../components/Header.vue";
</script>
<template>
  <div class="w-full md:w-1/2 mx-auto">
    <Header />
    <router-view></router-view>
    <footer></footer>
  </div>
</template>
