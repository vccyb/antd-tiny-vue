<docs>
前缀：`#prepend`
后缀：`#append`
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('aaa')
const msg2 = ref('bbb')
</script>

<template>
  <div class="display-box">
    <y-input type="text">
      <template #prepend>
        https://
      </template>
    </y-input>
    <y-input type="text">
      <template #append>
        .com
      </template>
    </y-input>
    <y-input type="text">
      <template #prepend>
        https://
      </template>
      <template #append>
        .com
      </template>
    </y-input>
  </div>
</template>

<style lang="scss" scoped>
.display-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
