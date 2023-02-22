<template>
  <div class="w-80 bg-white">
    <div class="h-11">
      <div class="p-3">🎖️作者榜</div>
    </div>
    <hr />
    <div>
      <div v-for="item in authorList" :key="item.avatar" class="flex p-3">
        <img :src="item.avatar" class="h-16 w-16 rounded-full" />
        <div class="ml-5">
          <div class="text-xl">{{ item.name }}</div>
          <div class="pt-1 text-gray-500">{{ item.job }}</div>
        </div>
      </div>
    </div>
    <hr />
    <nuxt-link :to="'#'">
      <div class="h-11 p-3 text-center text-lg leading-10 text-blue-500">完整榜单></div>
    </nuxt-link>
  </div>
</template>
<script lang="ts" setup>
const authorList = reactive([
  {
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/33a18c832ad717525f8abda8b4b03a52~100x100.awebp',
    name: '张三',
    job: '学生',
  },
  {
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/c1998c9bd48684eb72fa68d4bc262fc4~100x100.awebp',
    name: '李四',
    job: '学生',
  },
  {
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/b9a366997037d998063135bd56302b85~100x100.awebp',
    name: '王五',
    job: '学生',
  },
])
</script>

<style scoped></style>
