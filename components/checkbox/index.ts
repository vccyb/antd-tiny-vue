import type { App } from 'vue'

import CheckBox from './checkbox.vue'

CheckBox.install = function (app: App) {
  app.component('YCheckBox', CheckBox)
}

export default CheckBox
