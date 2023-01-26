<template>
  <div>
    <button
      class="rounded-lg px-2 text-white bg-slate-500 py-1 font-sans font-medium shadow-2xl transition-colors hover:bg-slate-400 active:bg-slate-600"
      @click="count++"
    >
    {{ count }}
    </button>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
let count = ref<number>(0)
</script>
