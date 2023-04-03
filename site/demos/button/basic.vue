<docs>
这是一个Button的基础按钮,可以根据`type`选择类型
,可以选择`round`是否圆角
</docs>

<script lang="ts" setup></script>

<template>
  <div class="display-box">
    <y-button>button</y-button>
    <y-button type="primary">
      primary
    </y-button>
    <y-button type="success">
      success
    </y-button>
    <y-button type="warning">
      warning
    </y-button>
    <y-button type="danger">
      danger
    </y-button>
    <y-button type="yep">
      yep
    </y-button>
  </div>
  <div class="display-box">
    <y-button round>
      round
    </y-button>
    <y-button type="primary" round>
      primary
    </y-button>
    <y-button type="success" round>
      success
    </y-button>
    <y-button type="warning" round>
      warning
    </y-button>
    <y-button type="danger" round>
      danger
    </y-button>
    <y-button type="yep" round>
      yep
    </y-button>
  </div>
</template>

<style lang="scss" scoped>
.display-box:first-child {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.display-box:last-child {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
</style>
