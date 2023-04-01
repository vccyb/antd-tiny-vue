<script setup lang="ts">
</script>

<template>
  <div>
    <button class="yep-button">
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.yep-button {
  border: 1px solid blueviolet;
  border-radius: 5px;
  padding: 5px 10px;
  &:hover {
    background-color: rgba(blueviolet, 0.3);
  }

  transition: all .5s;
}
</style>
