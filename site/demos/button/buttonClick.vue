
<script lang="ts" setup>
const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('Are you ok')
}
</script>

<template>
  <y-button type="primary" @click="handleClick">
    primary
  </y-button>
</template>

  <style lang="scss" scoped>
  .display-box:first-child {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  </style>
