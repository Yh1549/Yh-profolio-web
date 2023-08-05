<script setup>
const prop = defineProps(["code"]);
</script>
<template>
  <div class="mockup-code w-full">
    <slot name="content">
      <pre data-prefix="$" class="text-success"><code>{{prop.code}}</code></pre>
    </slot>
  </div>
</template>
