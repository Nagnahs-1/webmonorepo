<script lang="ts" setup>
import type { ZhiHuHot, ZhiHuHotList } from '@/types/zhihu'
import { onMounted, ref } from 'vue'


const list = ref<ZhiHuHot[]>([])
const getData = async () => {
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
  <!-- <div class="list">
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
  </div> -->
  <div class="bg-#a992d5 md:bg-amber-4 sm:bg-blue-3">
    <section v-for="(item, index) in list" :key="item.id" class="flex cursor-pointer items-center rounded-lg bg-gray-100 p-4 shadow-md" @click="toggleHot(item.target.id)">
      <span class="mr-4 text-lg font-semibold">{{ index + 1 }}</span>
      <div class="flex-1">
        <h1 class="truncate text-lg font-medium leading-tight">
          {{ item.target.title }}
        </h1>
        <p class="line-clamp-2 text-sm text-gray-600 leading-tight">
          {{ item.target.excerpt }}
        </p>
        <div class="mt-2 text-sm text-gray-500">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" class="ml-4 h-auto w-32 rounded-lg" alt="">
    </section>
  </div>
</template>

<!-- <style scoped>
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
</style> -->
