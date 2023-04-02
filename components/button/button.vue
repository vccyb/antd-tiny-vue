<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: '',
    validator(value: string) {
      return ['primary', 'success', 'warning', 'danger', 'yep'].includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const styleClass = computed(() => {
  return {
    [`y-button--${props.type}`]: props.type,
    'is-disabled': props.disabled,
  }
})
</script>

<template>
  <div>
    <button class="y-button" :class="styleClass">
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: 10px;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.y-button:focus,
.y-button:hover{
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.y-button.is-disabled,
.y-button.is-disabled:focus,
.y-button.is-disabled:active,
.y-button.is-disabled:hover {
  color: #fff;
  cursor: not-allowed;
  background-image: none;
  background-color: #D3D3D3;
  border-color: #D3D3D3;
}

.y-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.y-button--primary:focus,
.y-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.y-button--primary.is-disabled,
.y-button--primary.is-disabled:active,
.y-button--primary.is-disabled:focus,
.y-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.y-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.y-button--success:focus,
.y-button--success:hover {
  background: #85ce61;
  background-color: #85ce61;
  color: #fff;
}

.y-button--success.is-disabled,
.y-button--success.is-disabled:active,
.y-button--success.is-disabled:focus,
.y-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.y-button--warning {
  border-color: #e6a23c;
  background-color: #e6a23c;
  color: #fff;
}

.y-button--warning:focus,
.y-button--warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.y-button--warning.is-disabled,
.y-button--warning.is-disabled:active,
.y-button--warning.is-disabled:focus,
.y-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.y-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.y-button--danger:focus,
.y-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

.y-button--danger.is-disabled,
.y-button--danger.is-disabled:active,
.y-button--danger.is-disabled:focus,
.y-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.y-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.y-button--info:focus,
.y-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.y-button--yep {
  background: #9400D3;
  border-color: #9400D3;
  color: #fff;
}

.y-button--yep:focus,
.y-button--yep:hover {
  background: #BA55D3;
  border-color: #BA55D3;
  color: #fff;
}

.y-button--yep.is-disabled,
.y-button--yep.is-disabled:active,
.y-button--yep.is-disabled:focus,
.y-button--yep.is-disabled:hover {
  color: #fff;
  background-color: #CCA3CC;
  border-color: #CCA3CC;
}
</style>
