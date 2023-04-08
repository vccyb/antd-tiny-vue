<script setup lang="ts">
import { type ComponentInternalInstance, computed, getCurrentInstance, nextTick, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  step: {
    type: Number,
    default: 1,
  },

  max: {
    type: Number,
    default: +Infinity,
  },
  min: {
    type: Number,
    default: -Infinity,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  precision: {
    type: Number,
  },
})

const emit = defineEmits(['update:modelValue'])
const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(newvalue: number) {
    const { min, max } = props
    const limit = [
      {
        validate: (value: any) => typeof value !== 'number',
        res: inputValue,
      },
      {
        validate: (value: number) => value >= max,
        res: max,
      },
      {
        validate: (value: number) => value <= min,
        res: min,
      },
      {
        validate: (value: number) => true,
        res: newvalue * 1,
      },
    ]
    // console.log(`newvalue: ${newvalue} inputvalue: ${inputValue.value}`)
    const _value: number = limit.find(v => v.validate(newvalue))?.res as number
    emit('update:modelValue', Number(_value.toFixed(props.precision)))
  },
})

const decreaseDisabled = computed(() => {
  return props.disabled || inputValue.value <= props.min
})

const increaseDisabled = computed(() => {
  return props.disabled || inputValue.value >= props.max
})

const handleClick = (type: string) => {
  if (type === 'increase') {
    if (increaseDisabled.value) return
    inputValue.value = Number(inputValue.value) + props.step
  }
  else if (type === 'decrease') {
    if (decreaseDisabled.value) return
    inputValue.value = Number(inputValue.value) - props.step
  }
}

const updateKey = ref(0)

const handleChange = () => {
  updateKey.value += 1
}
</script>

<template>
  <div class="input-number-inner">
    <y-input v-model="inputValue" :update-key="updateKey" center :disabled="props.disabled" @change="handleChange">
      <template #prepend>
        <div class="cursor-point" :class="{ 'is-disabled': decreaseDisabled }" @click="handleClick('decrease')">
          <y-icon name="jian" />
        </div>
      </template>
      <template #append>
        <div class="cursor-point" :class="{ 'is-disabled': increaseDisabled }" @click="handleClick('increase')">
          <y-icon name="jia" />
        </div>
      </template>
    </y-input>
  </div>
</template>

<style scoped lang="scss">
  .input-number-inner {
    width: 150px;
  }

  .cursor-point {
    cursor: pointer;
  }

  .is-disabled {
    cursor: not-allowed;
  }
</style>
