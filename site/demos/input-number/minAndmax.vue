<docs>
  可以通过`min`和`max`限制最小最大值
</docs>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(5)
const count2 = ref(10)
</script>

<template>
  <div class="display-box">
    <y-input-number v-model="count" :step="2" :min="1" :max="10" />
    <span>{{ count }}</span>
    <span>{{ `[min:1 - max:10]` }}</span>
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
