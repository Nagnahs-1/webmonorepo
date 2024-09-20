import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({
    // 默认在根目录，也可手动指定配置文件
    configFile: './uno.config.ts',
  },
  )],
  resolve: {
    alias: { '@': '/src' },
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.zhihu.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
// vite.config.ts
// import UnoCSS from "unocss/vite";
// import { defineConfig } from "vite";
// export default defineConfig({
//   plugins: [UnoCSS()],
// });


