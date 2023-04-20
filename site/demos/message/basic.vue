<script setup lang="ts">
import { useMessage } from '../../../components/message'
const $message = useMessage()
const showMessage = () => {
  $message({ aa: 'bb' })
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
