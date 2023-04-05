<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
})

const styleClass = computed(() => {
  return {
    'is-disabled': props.disabled,
    'is-center': props.center,
  }
})
</script>

<template>
  <div>
    <input type="text" class="y-input" :class="styleClass" :disabled="props.disabled">
  </div>
</template>

<style scoped lang="scss">
.y-input {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;

  }

  .y-input:hover {
    border-color: #c0c4cc;
  }

  .y-input:focus {
    outline: none;
    border-color: #409eff;
  }

  .y-input.is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }

  .y-input.is-center {
    text-align: center;
  }
</style>
