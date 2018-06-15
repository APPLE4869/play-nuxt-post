<template>
  <div class='app'>
    <header-component />

    <flash-component :flash-type='flashType' />

    <div class='container'>
      <nuxt />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "~/components/header.vue";
import FlashComponent from "~/components/flash.vue";

export default {
  components: { HeaderComponent, FlashComponent },
  data: function () {
    return {
      flashType: null
    }
  }
};
</script>

<style scoped>
.app .container {
  width: 500px;
  margin-top: 30px;
  margin-bottom: 50px;
}

.page-enter-active, .page-leave-active {
  transition: opacity .1s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
