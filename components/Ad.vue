<template>
  <div class="w-80">
    <nuxt-link :to="item.link" v-for="(item, index) in adList" :key="index">
      <img :src="item.url" />
    </nuxt-link>
  </div>
</template>
<script lang="ts" setup>
const adList = reactive([
  {
    url: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/513e1d89a09b4a0ebab67c6a1dc94901~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?',
    link: '',
  },
])
</script>
