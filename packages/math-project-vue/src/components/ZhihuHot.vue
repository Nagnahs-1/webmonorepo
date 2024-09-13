<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { ZhiHuHot, ZhiHuHotList } from '@/types/zhihu'


const list = ref<ZhiHuHot[]>([]);
// const url = "/api/v3/feed/topstory/hot-lists/total";
// let response = await fetch(url, { mode: "no-cors" });
const getData = async () => {
  // const url =
  //   "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true";
  // let response = await fetch(url, { mode: "no-cors" });
  const url = "/api/v3/feed/topstory/hot-lists/total";
  let response = await fetch(url, { mode: "no-cors" });
  const res: ZhiHuHotList = await response.json();
  list.value = res.data;
};

onMounted(() => {
  getData();
});

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`);
};
const a = ('abcd')
const arr = ref([1, 2, 3, 4])
</script>

<template>
  <div class="list">
    <section v-for="(item, index) in list" :key="item.id" class="hot" @click="toggleHot(item.target.id)">
      <span>{{ index + 1 }}</span>
      <div>
        <h1 class="ellipsis_2">{{ item.target.title }}</h1>
        <p class="ellipsis_1">{{ item.target.excerpt }}</p>
        <div>{{ item.detail_text }}</div>
      </div>
      <img :src="item.children[0].thumbnail" alt="">
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

/* 容器样式 */
.list {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 单个卡片样式 */
.hot {
  background-color: #fbf3f3;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 16px;
}

/* 左侧内容区域 */
.hot .content {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

/* 序号样式 */
.hot span {
  display: inline-block;
  padding: 8px 12px;
  background-color: #ebebf3;
  border-radius: 8px;
  margin-right: 16px;
  font-size: 1.2em;
  color: #555;
}

/* 标题样式 */
.ellipsis_2 {
  font-size: 1.5em;
  margin-bottom: 8px;
  color: #222;
}

/* 摘要样式 */
.ellipsis_1 {
  font-size: 1em;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*控制最大行数*/
  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
}

/* 详细文字样式 */
.hot div:last-child {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 16px;
}

/* 图片样式 */
.hot img {
  width: 150px;
  height: auto;
  margin-right: 20px;
  float: right;
  /* 使图片左对齐并且文字环绕 */
  border-radius: 8px;
  flex-shrink: 0;

}
</style>
