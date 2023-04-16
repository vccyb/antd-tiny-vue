import type { App } from 'vue'

import Radio from './radio.vue'

Radio.install = function (app: App) {
  app.component('YRadio', Radio)
}

export default Radio
