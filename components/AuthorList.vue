<template>
  <div id="frame">
    <span id="top">
      <div>作者榜</div>
    </span>
    <br /><br />
    <hr />
    <div>
      <a href="#">张三</a> <br>
      <a href="#">李四</a> <br>
      <a href="#">王五</a> <br>
    </div>
    <hr/>
    <a class="change" href="#">完整榜单></a>
  </div>
</template>
<script lang="ts" setup>
  let isShow = ref(1)
  function change(index:number){
    isShow.value=index
  }
</script>

<style scoped>
#frame {
  position: relative;
  box-sizing: border-box;
  height: 500px;
  width: 100px;
  margin: -500px 150px auto auto;
  border-style: solid;
  border-color: black;
}

#top {
  position: absolute;
  display: flex;
  justify-content: left;
  margin-top: 10px;
}

#date {
  border-color: rgb(202, 202, 202);
  color: rgb(125, 125, 125);
}

.change{
  color:cornflowerblue;
}
</style>
