<template>
  <div class="layout" style="display: flex; justify-content: center; align-items: center">
    <button style="font-size: 50px" @click="cut">cut</button>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import screenshot2Js from '../../../src/index'
const instance = screenshot2Js()
onMounted(() => {

})

const cut = ()=>{
  instance.cropping()
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  --global-font: "Noto Serif SC", "MicroSoft Yahei", serif;
  --color-accent: #fe9600;
  --color-gray: #666;
  --color-text: #02111d;
  --color-background: #eee;
  --color-border: #d0d7de;
  --code-line-height: 24px;
  --code-font-family: monospace;
  --code-font-size: 15px;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--global-font);
  font-size: 16px;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

hr {
  border: none;
  border-bottom: 1px dashed var(--color-border);
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--color-accent);
}

.layout{
  width: 100%;
  height: 200vh;
  background-image: url("./assets/wallhaven-x6r2vz.jpg"); /* 替换为你的图片URL */
  background-repeat: repeat; /* 平铺背景图 */
  background-position: center center;
  background-size: cover;
  opacity: 0.5;
  /* 背景图位置 */
}

</style>
