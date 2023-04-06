<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => {
      return ['text', 'textarea'].includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
    validator: (value: string) => {
      return ['medium', 'small'].includes(value)
    },
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const styleClass = computed(() => {
  return {
    'is-disabled': props.disabled,
    'is-center': props.center,
    [`y-input--${props.size}`]: props.size,
  }
})

// 我们是没有办法修改props的，需要执行函数
const clearText = () => {
  emit('update:modelValue', '')
}
</script>

<template>
  <div>
    <template v-if="type === 'textarea'">
      <div class="y-textarea-outer">
        <textarea
          v-bind="$attrs"
          class="y-textarea"
          :class="styleClass"
          :disabled="props.disabled"
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <span v-if="props.clearable && modelValue" class="y-texearea-clear" @click="clearText">
          <y-icon name="close" />
        </span>
      </div>
    </template>
    <template v-else>
      <div class="y-input-outer">
        <input
          v-bind="$attrs"
          type="text" class="y-input"
          :class="styleClass"
          :disabled="props.disabled"
          :value="modelValue"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
        <span v-if="props.clearable && modelValue" class="y-input-clear" @click="clearText">
          <y-icon name="close" />
        </span>
      </div>
    </template>
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

  .y-textarea {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1)
  }

  .y-textarea.is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }

  .y-textarea.is-center {
    text-align: center;
  }

  .y-textarea:focus {
    outline: none;
    border-color: #409eff;
  }

  .y-textarea-outer {
    width: 100%;
    position: relative;

    .y-texearea-clear {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      color: #ccc;
      cursor: pointer;
    }
  }

  .y-input--medium {
    height: 36px;
    line-height: 36px;
  }

  .y-input--small {
    height: 32px;
    line-height: 32px;
  }

  .y-input-outer {
    position: relative;
    width: 100%;

    .y-input-clear {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      color: #ccc;
      cursor: pointer;
    }
  }
</style>
