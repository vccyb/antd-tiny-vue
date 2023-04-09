<script setup lang="ts">
import { ref } from 'vue'
const count = ref(5)
</script>

<template>
  <div class="display-box">
    <y-input-number v-model="count" :step="0.2" :min="1" :max="10" :precision="2" />
    <span>{{ `count: ${count}` }}</span> <span> {{ `step: 0.2` }}</span>
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
