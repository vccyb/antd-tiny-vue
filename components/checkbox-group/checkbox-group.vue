<script setup lang="ts">
import { getCurrentInstance, provide } from 'vue'
const props = defineProps({
  modelValue: {
    type: Array,
  },
})

const emits = defineEmits(['update:modelValue'])

provide('CheckBoxGroup', getCurrentInstance())
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>

</style>
