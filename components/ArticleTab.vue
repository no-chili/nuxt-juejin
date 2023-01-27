<template>
  <div id="frame">
    <span id="top">
      <a
        class="fch"
        id="ch1"
        href="#"
        :style="{ color: isShow === 1 ? 'dodgerblue' : 'rgb(125,125,125)' }"
        @click="change(1)"
        >推荐</a
      >
      <div class="bound">|</div>
      <a
        class="ch"
        id="ch2"
        href="#"
        :style="{ color: isShow === 2 ? 'dodgerblue' : 'rgb(125,125,125)' }"
        @click="change(2)"
        >最新</a
      >
      <div class="bound">|</div>
      <a
        class="ch"
        id="ch3"
        href="#"
        :style="{ color: isShow === 3 ? 'dodgerblue' : 'rgb(125,125,125)' }"
        @click="change(3)"
        >热榜</a
      >
      <select id="date" style="display: none">
        <option value="3天内">3天内</option>
        <option value="7天内">7天内</option>
        <option value="30天内">30天内</option>
        <option value="全部">全部</option>
      </select>
    </span>
    <br /><br />
    <hr />
    <template>
      <div v-if="isShow === 1">我是页面一</div>
      <div v-else-if="isShow === 2">我是页面二</div>
      <div v-else-if="isShow === 3">我是页面三</div>
    </template>
  </div>
</template>
<script lang="ts" setup>
let isShow = ref(1)
const change = (index: number) => {
  isShow.value = index
}
</script>
<style scoped>
#frame {
  position: relative;
  box-sizing: border-box;
  height: 500px;
  width: 500px;
  margin: auto auto;
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
</style>
