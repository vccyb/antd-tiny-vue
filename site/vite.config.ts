import { defineConfig } from 'vite'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import { vitePluginVitepressDemo } from 'vite-plugin-vitepress-demo'

export default defineConfig({
  plugins: [vueJsxPlugin(), vitePluginVitepressDemo(
    {
      glob: ['**/demos/**/*.vue'],
    },
  )],
})
