<template>
  <div id="frame" class="min-w-1/2 relative ml-44 w-full bg-white">
    <span id="top">
      <a
        class="fch"
        id="ch1"
        href="#"
        :style="{ color: isShow === 0 ? 'dodgerblue' : 'rgb(125,125,125)' }"
        @click="change(0)"
        >推荐</a
      >
      <div class="bound">|</div>
      <a
        class="ch"
        id="ch2"
        href="#"
        :style="{ color: isShow === 1 ? 'dodgerblue' : 'rgb(125,125,125)' }"
        @click="change(1)"
        >最新</a
      >
      <div class="bound">|</div>
      <a
        class="ch"
        id="ch3"
        href="#"
        :style="{ color: isShow === 2 ? 'dodgerblue' : 'rgb(125,125,125)' }"
        @click="change(2)"
        >热榜</a
      >
      <select class="outline-none" id="date" :style="{ display: isShow === 2 ? 'block' : 'none' }">
        <option value="3天内">3天内</option>
        <option value="7天内">7天内</option>
        <option value="30天内">30天内</option>
        <option value="全部">全部</option>
      </select>
    </span>
    <br /><br />
    <hr />
    <div id="articles">
      <div id="box1">
        <NuxtLink v-for="item in articleList[isShow]" :key="item.id" :to="`/article/${item.id}`">
          <div class="plate">
            <span class="intro">
              <a class="intro_ch" href="#" onclick="">{{ item.worker }}</a>
              <div class="bound">|</div>
              <a class="intro_ch" href="#" onclick="">{{ item.time }}</a>
              <div class="bound">|</div>
              <a class="intro_ch" href="#" onclick="window.open('./javascript.html')">{{ item.tab }}</a>
            </span>
            <div class="article">
              <h1 style="margin-left: 10px">{{ item.title }}</h1>
              <p class="intro_ch">{{ item.introduce }}</p>
            </div>
          </div>
          <hr />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
let isShow = ref(0)
function change(index: number) {
  isShow.value = index
}

const articleList = ref([
  [
    {
      id: 1,
      time: '19天前',
      tab: '',
      worker: '掘金酱',
      title: '新年伊始，2月更文带你在技术写作之路「兔飞猛进」｜ 掘金日新计划',
      introduce: '新年伊始，2月更文带你在技术写作之路「兔飞猛进」｜ 掘金日新计划',
    },
  ],
  [
    {
      id: 1,
      time: '19天前',
      tab: '',
      worker: '掘金酱',
      title: '新年伊始，2月更文带你在技术写作之路「兔飞猛进」｜ 掘金日新计划',
      introduce: '新年伊始，2月更文带你在技术写作之路「兔飞猛进」｜ 掘金日新计划',
    },
  ],
  [],
])
</script>

<style scoped>
#frame {
  /* position: relative;
  box-sizing: border-box;
  height: 500px;
  width: 500px;
  margin: auto auto; */
  border-style: solid;
  border-color: black;
}

#top {
  position: absolute;
  display: flex;
  justify-content: left;
  margin-top: 10px;
}

.ch {
  margin: auto 10px;
  font-size: large;
  color: rgb(125, 125, 125);
}

.fch {
  margin: auto 10px;
  font-size: large;
  color: dodgerblue;
}

.bound {
  color: rgb(202, 202, 202);
}

#date {
  border-color: rgb(202, 202, 202);
  color: rgb(125, 125, 125);
}

.intro {
  display: flex;
  justify-content: left;
  margin-top: 10px;
}

.intro_ch {
  margin: 0px 10px;
  font-size: medium;
  color: rgb(125, 125, 125);
}
.plate {
  border-bottom-style: solid;
  border-color: rgb(202, 201, 201);
  box-sizing: border-box;
  height: 150px;
}
</style>
