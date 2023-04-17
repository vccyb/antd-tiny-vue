import type { App } from 'vue'

import CheckBoxGroup from './checkbox-group.vue'

CheckBoxGroup.install = function (app: App) {
  app.component('YCheckBoxGroup', CheckBoxGroup)
}

export default CheckBoxGroup
