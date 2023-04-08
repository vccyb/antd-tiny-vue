<script setup lang="ts">
import { ref } from 'vue'
const count = ref(5)
const count2 = ref(10)
</script>

<template>
  <div class="display-box">
    <y-input-number v-model="count" />
    <y-input-number v-model="count2" :step="2" />
  </div>
  <div class="display-box">
    <y-input-number v-model="count" :step="2" :min="1" :max="10" />
    <span>{{ `[min:1 - max:10]` }}</span>
  </div>
  <div class="display-box">
    <y-input-number v-model="count" :step="2" :min="1" :max="10" disabled />
  </div>

  <div class="display-box">
    <y-input-number v-model="count" :step="2" :min="1" :max="10" />
    <span>{{ count }}</span>
  </div>

  <div class="display-box">
    <y-input-number v-model="count" :step="0.2" :min="1" :max="10" :precision="2" />
    <span>{{ count }}</span>
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
