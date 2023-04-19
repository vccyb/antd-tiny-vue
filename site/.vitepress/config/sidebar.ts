import type { DefaultTheme } from 'vitepress'

export const getSidebar = (): DefaultTheme.Sidebar => {
  return {
    '/components/': [
      {
        text: 'Button 按钮',
        link: '/components/button/',
      },
      {
        text: 'Icon 图标',
        link: '/components/icon/',
      },
      {
        text: 'Input 输入框',
        link: '/components/input/',
      },
      {
        text: 'InputNumber 计数器',
        link: '/components/input-number/',
      },
      {
        text: 'Radio 单选',
        link: '/components/radio/',
      },
      {
        text: 'Checkbox 多选',
        link: '/components/checkbox/',
      },
      {
        text: 'Message 消息',
        link: '/components/message/',
      },
      {
        text: 'Card 卡片',
        link: '/components/card/',
      },
    ],
  }
}
