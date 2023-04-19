<script setup lang="ts">
import { useMessage } from '../../../components/message'
const showMessage = () => {
  // console.log('1111')
  useMessage()
}
</script>

<template>
  <div>
    <button @click="showMessage">
      click
    </button>
  </div>
</template>

<style lang="scss" scoped>

</style>
