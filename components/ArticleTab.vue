<template>
  <div id="frame">
    <span id="top">
      <a class="fch" id="ch1" href="#" :style="{color:isShow===1?'dodgerblue':'rgb(125,125,125)'}" @click="change(1)">推荐</a>
      <div class="bound">|</div>
      <a class="ch" id="ch2" href="#" :style="{color:isShow===2?'dodgerblue':'rgb(125,125,125)'}" @click="change(2)">最新</a>
      <div class="bound">|</div>
      <a class="ch" id="ch3" href="#" :style="{color:isShow===3?'dodgerblue':'rgb(125,125,125)'}" @click="change(3)">热榜</a>
      <select id="date" :style="{display:isShow===3?'block':'none'}">
        <option value="3天内">3天内</option>
        <option value="7天内">7天内</option>
        <option value="30天内">30天内</option>
        <option value="全部">全部</option>
      </select>
    </span>
    <br /><br />
    <hr />
    <div id="articles">
            <div id="box1" v-if="isShow===1">
                <div class="plate" onclick="window.open('./JavaScript怎么学.html')">
                    <span class="intro">
                        <a class=intro_ch href="#" onclick="">张三</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" onclick="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" onclick="window.open('./javascript.html')">JavaScript</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">JavaScript怎么学</h1>
                        <p class="intro_ch">JavaScript JavaScript JavaScript JavaScript</p>
                    </div>
                </div>
                <hr>
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">李四</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">HTML5</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">HTML怎么学</h1>
                        <p class="intro_ch">HTML HTML HTML HTML</p>
                    </div>
                </div>
                <hr>
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">王五</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">1月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">CSS</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">CSS怎么学</h1>
                        <p class="intro_ch">CSS CSS CSS CSS</p>
                    </div>
                </div>
                <hr>
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">老六</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">Node.js</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">Node.js怎么学</h1>
                        <p class="intro_ch">Node.js Node.js Node.js Node.js</p>
                    </div>
                </div>
                <hr>
            </div>
            <div id="box2" v-else-if="isShow===2">
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">王五</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">1月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">CSS</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">CSS怎么学</h1>
                        <p class="intro_ch">CSS CSS CSS CSS</p>
                    </div>
                </div>
                <div class="plate" onclick="window.open('./JavaScript怎么学.html')">
                    <span class="intro">
                        <a class=intro_ch href="#" onclick="">张三</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" onclick="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" onclick="window.open('./javascript.html')">JavaScript</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">JavaScript怎么学</h1>
                        <p class="intro_ch">JavaScript JavaScript JavaScript JavaScript</p>
                    </div>
                </div>
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">李四</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">HTML5</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">HTML怎么学</h1>
                        <p class="intro_ch">HTML HTML HTML HTML</p>
                    </div>
                </div>
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">老六</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">Node.js</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">Node.js怎么学</h1>
                        <p class="intro_ch">Node.js Node.js Node.js Node.js</p>
                    </div>
                </div>
            </div>
            <div id="box2" v-else-if="isShow===3">
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">老六</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">Node.js</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">Node.js怎么学</h1>
                        <p class="intro_ch">Node.js Node.js Node.js Node.js</p>
                    </div>
                </div>
                <div class="plate" onclick="window.open('./JavaScript怎么学.html')">
                    <span class="intro">
                        <a class=intro_ch href="#" onclick="">张三</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" onclick="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" onclick="window.open('./javascript.html')">JavaScript</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">JavaScript怎么学</h1>
                        <p class="intro_ch">JavaScript JavaScript JavaScript JavaScript</p>
                    </div>
                </div>
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">李四</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">2月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">HTML5</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">HTML怎么学</h1>
                        <p class="intro_ch">HTML HTML HTML HTML</p>
                    </div>
                </div>
                <div class="plate" onclick="window.open('')">
                    <span class="intro">
                        <a class=intro_ch href="#" @click="">王五</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">1月前</a>
                        <div class="bound">|</div>
                        <a class=intro_ch href="#" @click="">CSS</a>         
                    </span>
                    <div class="article">
                        <h1 style="margin-left: 10px;">CSS怎么学</h1>
                        <p class="intro_ch">CSS CSS CSS CSS</p>
                    </div>
                </div>
            </div>
        </div>
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

.intro{
    display: flex;
    justify-content: left;
    margin-top: 10px;
}

.intro_ch{
    margin:0px 10px;
    font-size:medium;
    color: rgb(125,125,125);
}
.plate{
    border-bottom-style:solid ;
    border-color: rgb(202, 201, 201);
    box-sizing: border-box;
    height: 150px;
}
</style>
