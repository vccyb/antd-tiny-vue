import type { App } from 'vue'

import InputNumber from './inputNumber.vue'

InputNumber.install = function (app: App) {
  app.component('YInputNumber', InputNumber)
}

export default InputNumber
