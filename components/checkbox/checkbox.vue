<script setup lang="ts">
import { computed, inject } from 'vue'

const props = defineProps({
  label: {
    type: String,
  },
  modelValue: {
    type: [Boolean, Array],
  },
})
const emits = defineEmits(['update:modelValue'])

const CheckBoxGroup = inject('CheckBoxGroup', '')

// 是否是分组，如果是分组就需要绑定到group v-model绑定的值
const isGroup = computed(() => {
  return CheckBoxGroup
})
const CKValue = computed({
  get() {
    return isGroup.value ? (CheckBoxGroup as any).props.modelValue : props.modelValue
  },
  set(value) {
    isGroup.value ? (CheckBoxGroup as any).emit('update:modelValue', value) : emits('update:modelValue', value)
  },
})

const isChecked = computed(() => {
  if (isGroup.value) {
    return (CheckBoxGroup as any).props.modelValue.includes(props.label)
  }
  else {
    if (typeof props.modelValue === 'boolean') {
      // console.log('单选')
      return props.modelValue
    }
    else {
      // console.log('单选，多个公用一个v-model')
      return props.modelValue?.includes(props.label)
    }
  }
})
</script>

<template>
  <label class="y-checkbox">
    <span class="y-checkbox--outer">
      <span class="y-checkbox--inner" :class="{ 'is-checked': isChecked }" />
      <input
        v-model="CKValue"
        type="checkbox"
        class="y-checkbox-native"
        :value="label"
      >

    </span>
    <span class="checkbox--label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
.y-checkbox--outer {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.y-checkbox--inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);
}

.y-checkbox--inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform .15s ease-in .05s;
  transform-origin: center;
}

.y-checkbox--inner.is-checked {
  background-color: #409eff;
  border-color: #409eff;
}

.y-checkbox--inner.is-checked:after {
  transform: rotate(45deg) scaleY(1);
}

.y-checkbox-native {
  opacity: 0;
  display: none;
}

.y-checkbox--label {
  margin-left: -10px;
  display: inline-block;
  line-height: 19px;
  font-size: 14px;
}

.y-checkbox {
  color: #606266;
  // font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
}
</style>
