<template>
  <div>
    <div class='flash flash-success' v-if='flashType == 1'>
      <p>成功しました。</p>
    </div>

    <div class='flash flash-error' v-else-if='flashType == 0'>
      <p>失敗しました。</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flashType']
}
</script>

<style scoped>
.flash {
  margin: 0 auto;
  width: 200px;
  text-align: center;
}

.flash p {
  margin: 20px 0;
}

.flash.flash-success {
  color: #ff6666;
}

.flash.flash-error {
  color: #6666ff;
}
</style>
