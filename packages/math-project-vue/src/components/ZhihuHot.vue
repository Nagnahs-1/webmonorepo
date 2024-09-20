<script lang="ts" setup>
import type { ZhiHuHot, ZhiHuHotList } from '@/types/zhihu'
import { onMounted, ref } from 'vue'


const list = ref<ZhiHuHot[]>([])
// const url = "/api/v3/feed/topstory/hot-lists/total";
// let response = await fetch(url, { mode: "no-cors" });
const getData = async () => {
  // const url =
  //   "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true";
  // let response = await fetch(url, { mode: "no-cors" });
  const url = '/api/v3/feed/topstory/hot-lists/total'
  const response = await fetch(url, { mode: 'no-cors' })
  const res: ZhiHuHotList = await response.json()
  list.value = res.data
}

onMounted(() => {
  getData()
})

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`)
}
const a = ('abcd')
const arr = ref([1, 2, 3, 4])
</script>

<template>
  <div class="list">
    <section v-for="(item, index) in list" :key="item.id" class="hot" @click="toggleHot(item.target.id)">
      <span>{{ index + 1 }}</span>
      <div>
        <h1 class="ellipsis_2">
          {{ item.target.title }}
        </h1>
        <p class="ellipsis_1">
          {{ item.target.excerpt }}
        </p>
        <div>{{ item.detail_text }}</div>
      </div>
      <img :src="item.children[0].thumbnail" alt="">
    </section>
    <section>
      class="bg-yellow rounded-md w-800px grid grid-cols-3 items-center gap-2"
      >
      <div class="h-10 place-content-center bg-pink">
        1
      </div>
      <div bg-sky>
        2
      </div>
      <div>3</div>
      <div>4</div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: #f5f5f5;
}

.list {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hot {
  background-color: #fbf3f3;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 16px;
}

.hot .content {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

.hot span {
  display: inline-block;
  padding: 8px 12px;
  background-color: #ebebf3;
  border-radius: 8px;
  margin-right: 16px;
  font-size: 1.2em;
  color: #555;
}

.ellipsis_2 {
  font-size: 1.5em;
  margin-bottom: 8px;
  color: #222;
}

.ellipsis_1 {
  font-size: 1em;
  color: #666;
  overflow: hidden;
  /* 当内容被裁剪时，是否显示省略标记 */
  text-overflow: ellipsis;
  /* 元素显示为一个弹性盒子 */
  display: -webkit-box;
  /*最多显示两行文本，如果内容超过两行，则多余的内容会被裁剪，并显示省略号*/
  -webkit-line-clamp: 2;
/* 定义弹性盒子中项目的排列方向。vertical 表示项目将垂直排列，即从上到下 */
  -webkit-box-orient: vertical;
}

.hot div:last-child {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 16px;
}

.hot img {
  width: 150px;
  height: auto;
  margin-right: 20px;
  float: right;
  border-radius: 8px;
  flex-shrink: 0;

}
</style>
