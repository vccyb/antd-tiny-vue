import type { App } from 'vue'

import Icon from './icon.vue'

Icon.install = function (app: App) {
  app.component('YIcon', Icon)
}

export default Icon
