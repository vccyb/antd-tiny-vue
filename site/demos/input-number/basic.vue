<docs>
  可以通过`step`来绑定减少、增加的值
</docs>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(5)
const count2 = ref(10)
</script>

<template>
  <div class="display-box">
    <y-input-number v-model="count2" :step="2" :min="1" :max="10" />
  </div>
  <div class="display-box">
    <y-input-number v-model="count" :step="2" :min="1" :max="10" disabled />
  </div>
</template>

<style scoped lang="scss">
.display-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
