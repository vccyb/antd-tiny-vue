import type { Theme } from 'vitepress'
// eslint-disable-next-line import/no-named-as-default
import DefaultTheme from 'vitepress/theme'
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import './style/var.css'
import YepVue from '../../../components'

export default {
  ...DefaultTheme,
  enhanceApp(ctx): void {
    DefaultTheme.enhanceApp?.(ctx)
    ctx.app.component('Demo', AntdTheme)
    ctx.app.use(YepVue)
  },
} as Theme
