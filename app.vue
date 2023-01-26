<template>
  <div>
    <button
      class="h-9 rounded-md bg-teal-400 px-5 text-center text-black transition-all hover:bg-teal-500 active:bg-teal-600"
      @click="changeTheme"
    >
      切换主题
    </button>
    <div>当前主题：{{ currentTheme }}</div>
    <div class="bg-base text-main">
      <p>这是主题下的内容</p>
      <div>99999999999999999999999999999999999999999999999999999999999999</div>
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import './style/global.css'
const { currentTheme, changeTheme } = useTheme()
</script>
