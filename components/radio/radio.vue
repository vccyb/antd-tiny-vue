<script setup lang="ts">
import { computed, inject } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  label: {
    type: [String, Number],
  },
})

const emits = defineEmits(['update:modelValue'])
const RadioGroup = inject('RadioGroup', '')

const isGroup = computed(() => {
  return RadioGroup
})
const radioValue = computed({
  get() {
    return isGroup.value ? (RadioGroup as any).props.modelValue : props.modelValue
  },
  set(value) {
    if (isGroup.value)
      (RadioGroup as any).emit('update:modelValue', value)
    else
      emits('update:modelValue', value)
  },
})

const isChecked = computed(() => {
  return radioValue.value === props.label
})
</script>

<template>
  <label class="y-radio">
    <span class="y-radio--outer">
      <span class="y-radio--inner" :class="{ 'is-checked': isChecked }" />
      <input v-model="radioValue" class="y-radio-native" type="radio" :value="label">
    </span>

    <span class="y-radio--label">
      {{ props.label }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.y-radio--outer {
  white-space: nowrap;

  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.y-radio--inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}

.y-radio--inner.is-checked {
  border-color: #409eff;
  background: #409eff;
}

.y-radio--inner::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}

.y-radio--inner.is-checked::after {
  transform: translate(-50%, -50%) scale(1);
}

.y-radio--label {
  margin-left: 4px;
  font-size: 14px;

}

.y-radio {
  margin-right: 20px;
  cursor: pointer;
}

.y-radio:last-child {
  margin-right: 0;
}

.y-radio-native {
  opacity: 0;
  display: none;
}
</style>
