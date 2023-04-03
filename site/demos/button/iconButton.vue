<script lang="ts" setup></script>

<template>
  <div class="display-box">
    <y-button icon="info">
      info
    </y-button>
    <y-button icon="loading" type="primary">
      loading
    </y-button>
    <y-button icon="gou1" type="info" round />
    <y-button icon="info" type="yep" />
  </div>
</template>

  <style lang="scss" scoped>
  .display-box:first-child {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  </style>
