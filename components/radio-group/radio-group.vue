<script setup lang="ts">
import { getCurrentInstance, provide } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
})

const emits = defineEmits(['update:modelValue'])

provide('RadioGroup', getCurrentInstance())
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>

</style>
