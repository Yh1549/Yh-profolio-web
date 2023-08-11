<script setup>
const prop = defineProps(["code"]);
</script>
<template>
  <div class="mockup-code w-full bg-slate-500">
    <slot name="content">
      <pre
        data-prefix="$"
        class="text-emerald-400"
      ><code>{{prop.code}}</code></pre>
    </slot>
  </div>
</template>
