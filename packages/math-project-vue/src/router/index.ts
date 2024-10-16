import ZhihuHot from '@/components/ZhihuHot.vue'
import Apifox from '@/pages/Apifox.vue'
import HomeView from '@/pages/HomeView.vue'
import i18 from '@/pages/i18.vue'
import MockView from '@/pages/MockView.vue'
import Test from '@/pages/Test.vue'
import Unocsstest from '@/pages/Unocsstest.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'mock', path: '/mock', component: MockView },
  { name: 'zhihu', path: '/zhihu', component: ZhihuHot },
  { name: 'Apifox', path: '/api', component: Apifox },
  { name: 'I18n', path: '/I18n', component: i18 },
  { name: 'Test', path: '/Test', component: Test },
  { name: 'Unocsstest', path: '/Unocss', component: Unocsstest },
  // { name: 'theme', path: '/theme', component: ColorTheme },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
