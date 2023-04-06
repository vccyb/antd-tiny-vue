<docs>
  xxx
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('aaa')
const msg2 = ref('bbb')

const msg3 = ref('ccc')
const msg4 = ref('ddd')
</script>

<template>
  <div class="display-box">
    <y-input />
    <y-input disabled />
    <y-input center />
    <y-input placeholder="please enter" />
  </div>
  <div class="display-box">
    <y-input v-model="msg" />
    <span>{{ `msg:${msg}` }}</span>
  </div>

  <div class="display-box">
    <y-input v-model="msg2" type="textarea" />
    <span>{{ `msg:${msg2}` }}</span>
  </div>

  <div class="display-box">
    <y-input type="text" placeholder="默认large" />
    <y-input type="text" size="medium" placeholder="medium" />
    <y-input type="text" size="small" placeholder="small" />
  </div>

  <div class="display-box">
    <y-input type="textarea" disabled />
    <y-input type="textarea" center />
    <y-input type="textarea" />
  </div>

  <div class="display-box">
    <y-input v-model="msg3" type="input" clearable />
    <y-input v-model="msg4" type="textarea" clearable />
    <y-input v-model="msg3" type="input" placeholder="12345" clearable />
  </div>
</template>

<style lang="scss" scoped>
.display-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
