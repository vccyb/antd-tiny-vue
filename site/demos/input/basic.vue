<docs>
  通过`type` 可以切换 `input` 或者 `textarea`

  通过 `size` 选择大小

  通过 `clearable` 选择是否开启清楚功能
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('abcd')
</script>

<template>
  <div class="display-box">
    <y-input type="text" />
    <y-input type="textarea" />
  </div>

  <div class="display-box">
    <y-input type="text" placeholder="默认大小 large" />
    <y-input size="medium" placeholder="medium" />
    <y-input size="small" placeholder="small" />
  </div>

  <div class="display-box">
    <y-input v-model="msg" type="text" clearable />
    <y-input v-model="msg" type="textarea" clearable />
  </div>
</template>

<style lang="scss" scoped>
.display-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
