import type { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '组件',
      link: '/components/',
    },
    {
      text: '开发日志',
      link: '/developLog/',
    },
  ]
}
