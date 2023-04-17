<script setup lang="ts">
import { ref } from 'vue'
const hobby = ref(['篮球'])
</script>

<template>
  <y-check-box-group v-model="hobby">
    <y-check-box label="篮球" />
    <y-check-box label="足球" />
    <y-check-box label="排球" />
  </y-check-box-group>
  {{ hobby }}
</template>

<style scoped>

</style>
