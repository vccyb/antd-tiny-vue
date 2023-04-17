<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)
const hobby = ref([])
</script>

<template>
  <div>
    <y-check-box v-model="checked" label="篮球" />
    <span>是否选中 =>{{ checked ? '选中' : '未选中' }}</span>
  </div>

  <div>
    <y-check-box v-model="hobby" label="篮球" />
    <y-check-box v-model="hobby" label="足球" />
    <y-check-box v-model="hobby" label="排球" />
    <span>{{ hobby }}</span>
  </div>
</template>

<style scoped>

</style>
