<template>
  <div>
    <h1>メッセージ投稿ページ</h1>

    <form-component :message='message' :submitEvent='submitData'></form-component>
  </div>
</template>

<script>
import axios from 'axios';
import FormComponent from './_form.vue';

export default {
  layout: 'application',
  head: {
    title: 'New Page'
  },
  components: { FormComponent },
  data: function () {
    return {
      message: {}
    }
  },
  methods: {
    submitData: function () {
      let params = { message: this.message };

      axios.post('https://nuxt-api.herokuapp.com/messages', params)
        .then(res => {
          this.$nuxt.$router.push({ path: '/messages', params: { flash: 1 } })
        }).catch(e => {
          console.error('error:', e);
        });
    }
  }
}
</script>
