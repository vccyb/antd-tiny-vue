<script setup lang="ts">
import { computed, onMounted } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
})
onMounted(() => {
  import(('../../assets/js/iconfont.js') as any).then((icon) => {})
})
const IconName = computed(() => {
  return `#icon-${props.name}`
})
</script>

<template>
  <svg
    class="icon"
    aria-hidden="true"
  >
    <use :xlink:href="IconName" />
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
