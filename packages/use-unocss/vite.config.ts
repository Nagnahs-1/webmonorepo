// import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
// // vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
})

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
// vite.config.ts
// import UnoCSS from "unocss/vite";
// import { defineConfig } from "vite";
// export default defineConfig({
//   plugins: [UnoCSS()],
// });
