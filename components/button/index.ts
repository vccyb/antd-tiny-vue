import type { App } from 'vue'

import Button from './button.vue'

Button.install = function (app: App) {
  app.component('YButton', Button)
}

export default Button
