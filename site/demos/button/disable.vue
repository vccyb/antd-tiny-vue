<docs>

</docs>

<script setup lang="ts">

</script>

<template>
  <div class="display-box">
    <y-button disabled>
      button
    </y-button>
    <y-button type="primary" disabled>
      primary
    </y-button>
    <y-button type="success" disabled>
      success
    </y-button>
    <y-button type="warning" disabled>
      warning
    </y-button>
    <y-button type="danger" disabled>
      danger
    </y-button>
    <y-button type="yep" disabled>
      yep
    </y-button>
  </div>
</template>

<style lang="scss" scoped>
.display-box {
  display: flex;
  gap: 10px;
}
</style>
