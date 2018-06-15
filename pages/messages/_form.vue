<template>
  <div>
    <input name='id' type='hidden' v-model='message.id'>

    <div class='form-group'>
      <label for='title'>タイトル</label>
      <input id='title' name='title' type='text' placeholder='タイトル' class='form-control' v-model='message.title' />
    </div>

    <div class='form-group'>
      <label for='textarea'>内容</label>
      <textarea id='textarea' name='textarea' placeholder='内容' class='form-control' v-model='message.text'></textarea>
    </div>

    <!-- フォームがSubmitされないようにtypeをbuttonに設定する -->
    <button type='button' class='btn' @click='submitEvent'>送信</button>
  </div>
</template>

<script>
export default {
  props: ['message', 'submitEvent']
}
</script>

<style scoped>
.btn {
  color: #ffffff;
  background: #41b883;
}
</style>
