<template>
  <!-- 主导航栏 -->
  <div class="h-15 flex flex-wrap relative">
      <svg t="1675353312151" class="sticky top-4 w-9 h-7 ml-10 mr-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3079" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z" fill="#007FFC" p-id="3080"></path></svg>
      <span class="text-center lineHeight mr-3 text-xl">稀土掘金</span>
    <ul class="flex">
      <li v-for="item in tabs" :key="item.id" class="px-2 h-auto w-14 text-sm cursor-pointer relative">
        <span class="block absolute top-1 left-7 text-xs w-14 rounded-3xl scale-75 px-0 bg-tab text-white text-center" v-if="item.text">{{item.text}}</span>
        <a class="lineHeight inline-block w-8 h-14 align-middle text-center hover:text-highlight hover:border-b-2 hover:border-highlight " href="javascript:;">{{item.name}}</a>
      </li>
    </ul>
  </div>
  <hr>
  <!-- 副导航栏 -->
  <nav class="h-12">
    <ul class="flex ml-44 h-auto min-w-1/2">
      <li v-for="item in tab2" :key="item.id">
      <a class="inline-block w-auto h-14 lineHeight px-3 text-tiny relative" href="javascript:;">
        <div class="absolute top-4 left-11 w-1 h-1 bg-red-500 rounded" v-if="item.red"></div>
        <span class="hover:text-highlight text-nav">{{ item.name }}</span>
      </a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
// 首导航栏的配置
  const tabs = reactive([
    {
      id:1,
      name:'首页',
      text:''
    },
    {
      id:2,
      name:'沸点',
      text:'',
    },
    {
      id:3,
      name:'课程',
      text:null
    },
    {
      id:4,
      name: '直播',
      text:null,
    },
    {
      id:5,
      name: '活动',
      text:null,
    },
    {
      id:6,
      name: '竞赛',
      text:'码上报名',
    },
    {
      id:6,
      name: '商城',
      text:null,
    }]
  )
// 副导航栏的配置
  const tab2 =reactive([
  {
    id:1,
    name:'综合',
    red:false,
  },
    {
      id:2,
      name:'关注',
      red:true,
    },
    {
      id:3,
      name:'后端',
      red:false
    },
    {
      id:4,
      name: '前端',
      red:false,
    },
    {
      id:5,
      name: 'Android',
      red:false,
    },
    {
      id:6,
      name: 'iOS',
      red:false,
    },
    {
      id:7,
      name: '人工智能',
      red:false,
    },{
      id:8,
      name: '开发工具',
      red:false,
    },{
      id:9,
      name: '代码人生',
      red:false,
    },{
      id:10,
      name: '阅读',
      red:false,
    },]
  )
</script>
<style scoped>
.lineHeight{
  line-height: 56px;
}
</style>
