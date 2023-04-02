<docs>

</docs>

<script setup lang="ts">

</script>

<template>
  <div class="display-box">
    <YButton disabled>
      button
    </YButton>
    <YButton type="primary" disabled>
      primary
    </YButton>
    <YButton type="success" disabled>
      success
    </YButton>
    <YButton type="warning" disabled>
      warning
    </YButton>
    <YButton type="danger" disabled>
      danger
    </YButton>
    <YButton type="yep" disabled>
      yep
    </YButton>
  </div>
</template>

<style lang="scss" scoped>
.display-box {
  display: flex;
  gap: 10px;
}
</style>
