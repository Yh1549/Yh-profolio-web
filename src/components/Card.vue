<template>
  <div class="p-4 w-full md:w-1/2">
    <div class="card bg-base-300 shadow-xl box-content">
      <figure class="w-full h-48">
        <slot name="WorkImg"> </slot>
      </figure>
      <div class="card-body gap-0">
        <h2 class="card-title">
          <slot name="title"></slot>
        </h2>
        <p><slot name="info"></slot></p>
        <p><slot name="content"></slot></p>
      </div>
    </div>
  </div>
</template>
