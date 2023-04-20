import type { App } from 'vue'

import * as components from './components'

import message from './message'

export default {
  install(app: App) {
    // 注册相关组件
    for (const componentsKey in components) {
      const component = (components as any)[componentsKey]
      if (component.install)
        app.use(component)
    }
    app.use(message)
  },
}
