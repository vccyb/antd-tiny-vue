<script setup lang="ts">
import { ref } from 'vue'
const checked = ref('123')

const checked2 = ref('123')
</script>

<template>
  <div class="display-box">
    <y-radio v-model="checked" label="aaa" />
    <y-radio v-model="checked" label="bbb" />

    <br>
    {{ checked }}
  </div>
  <y-radio-group v-model="checked2">
    <y-radio label="111" />
    <y-radio label="222" />

    <y-radio label="333" />
  </y-radio-group>
  {{ checked2 }}
  <div />
</template>

<style scoped lang="scss">

</style>
