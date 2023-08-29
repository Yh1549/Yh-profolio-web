<script setup>
const props = defineProps(["imgSrc"]);
</script>
<template>
  <div class="card shadow-xl p-4 w-full md:w-1/2">
    <figure class="w-full h-36 rounded-lg">
      <!-- <slot name="WorkImg"> </slot> -->
      <img :src="props.imgSrc" />
    </figure>
    <div class="card-body gap-0">
      <h2 class="text-center font-bold text-lg">
        <slot name="title"></slot>
      </h2>
      <p><slot name="content"></slot></p>
    </div>
  </div>
</template>
