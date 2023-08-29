<template>
  <section class="my-2">
    <div class="flex justify-between border-b-2 opacity-80">
      <h1 class="text-xl">
        <slot name="title"></slot>
      </h1>
      <p class="text-sm opacity-70">
        <slot name="content"></slot>
      </p>
    </div>
    <div class="flex flex-wrap">
      <slot name="workItem"></slot>
    </div>
  </section>
</template>
