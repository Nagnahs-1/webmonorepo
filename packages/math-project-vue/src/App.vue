<script setup lang="ts">
import { Person } from '@Nagnahs-1/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import ZhihuHot from './components/ZhihuHot.vue'
import { useDark } from './composables/useDark'

const p = new Person('jumping', 'math')

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})
</script>

<template>
  <div class="p-2 dark:bg-red">
    <div
      class="m-auto size-100 bg-pink hover:(bg-cyan text-4xl) md:bg-amber-4 sm:bg-blue-3"
      flex
      content-center
      items-center
      justify-center
      transition-1000
    >
      <button btn>
        OnClick
      </button>
      <div class="i-carbon-logo-github" />
    </div>

    <div class="dark:bg-red">
      <div class="flex justify-center gap-5">
        <button @click="disableDarkMode">
          Light
        </button>
        <button @click="enableDarkMode">
          Dark
        </button>
      </div>
    </div>
    <div>当前时间{{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}</div>
    <div>{{ p.name }} : {{ p.slogan }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <section
      class="grid grid-cols-3 w-800px items-center gap-2 rounded-md bg-yellow"
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
    <ZhihuHot />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
