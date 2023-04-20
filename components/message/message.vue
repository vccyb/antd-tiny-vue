<script setup lang="ts">
</script>

<template>
  <div ref="root" class="y-message">
    <div class="y-message-content">
      我是一个message消息提示
    </div>
  </div>
</template>

<style lang="scss" scoped>
.y-message {
  width: 380ox;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  top: 20px ;
  right: 20px;
  z-index: 99999;
  line-height: 20px;
  background-color: #edf2fc;
  padding: 15px 15px 15px 20px;
  border-radius: 5px;
}
</style>
