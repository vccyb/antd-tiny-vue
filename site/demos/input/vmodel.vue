
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('aaa')
const msg2 = ref('bbb')
</script>

<template>
  <div class="display-box">
    <div>
      <y-input v-model="msg" type="text" clearable />
      <span>{{ msg }}</span>
    </div>
    <div>
      <y-input v-model="msg2" type="textarea" clearable />
      <span>{{ msg2 }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.display-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
