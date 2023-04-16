import type { App } from 'vue'

import RadioGroup from './radio-group.vue'

RadioGroup.install = function (app: App) {
  app.component('YRadioGroup', RadioGroup)
}

export default RadioGroup
