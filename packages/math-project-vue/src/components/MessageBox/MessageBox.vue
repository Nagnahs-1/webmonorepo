// packages/math-project-vue/src/components/MessageBox/MessageBox.vue
<script setup lang="ts">
import type { MessageBoxProps } from './index'

const {
  showConfirm = true,

  closeable = true,
  showCancel = true,
  showIcon = true,
} = defineProps<MessageBoxProps>()
const enit = defineEmits(['cancel', 'confirm'])


function handleCancle() {
  enit('cancel')
}
function handleConfrn() {
  enit('confirm')
}
</script>

<template>
  <div class="absolute left-0 top-0 z999 h-full w-full flex content-center items-center bg-#3c36487a">
    <div class="relative ma w-100 overflow-hidden rounded-xl bg-#e1e1e1 p-10">
      <div v-if="closeable" class="i-material-symbols-light-cancel-presentation-outline-sharp absolute right-5 top-5 size-10 cursor-pointer" @click="handleCancle" />
      <!-- 弹内客- -->
      <div flex items-center gap-3 text-xl>
        <div v-if="showIcon" class="nb-a i-carbon-warning size-20" />

        <div flex-1>
          <p v-if="title">
            {{ title }}
          </p>
          <div w-full break-words>
            {{ content }}
          </div>
        </div>
      </div>
      <!-- 操作报钮- -->
      <div mt-4 flex justify-center gap-10>
        <button v-if="showConfirm" class="cursor-pointer rounded-sm border-none bg-purple-950 px-12 text-white" @click="handleConfrn">
          确定
        </button>
        <button v-if="showCancel" class="cursor-pointer rounded-sm bg-red px-12 text-white" @click="handleCancle">
          取消
        </button>
      </div>
    </div>
  </div>
</template>
