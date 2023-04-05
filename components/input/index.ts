import type { App } from 'vue'

import Input from './input.vue'

Input.install = function (app: App) {
  app.component('YInput', Input)
}

export default Input
