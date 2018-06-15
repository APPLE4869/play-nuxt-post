<template>
  <div>
    <h1>メッセージ一覧ページ</h1>

    <ul class='list-group' v-if='messages && messages.length > 0'>
      <nuxt-link tag='li' :to="{ name: 'messages-id-edit', params: { id: message.id }}" class='list-group-item list-group-item-action' v-for='message in messages'>
        <p>ID: {{ message.id }}</p>
        <p>タイトル: {{ message.title }}</p>
        <p>説明: {{ message.text }}</p>
      </nuxt-link>
    </ul>

    <p class='text-center' v-if='messages && messages.length === 0'>メッセージはありません。</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  layout: 'application',
  head: {
    title: 'messages Page'
  },
  data: function () {
    return {
      messages: null
    }
  },
  asyncData () {
    return axios.get('https://nuxt-api.herokuapp.com/messages')
      .then(res => {
        if (res.data.body.length === 0) {
          return { messages: [] };
        }
        return { messages: res.data.body };
      })
      .catch(e => {
        console.error('error:', e);
      });
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
