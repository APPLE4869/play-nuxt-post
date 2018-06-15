<template>
  <header>
    <div class='header-container'>
      <div class='logo'>
        <nuxt-link to="/">WELCOME NUXT</nuxt-link>
      </div>

      <ul class='nav-menu'>
        <li><nuxt-link to="/messages">一覧</nuxt-link></li>
        <li><nuxt-link to="/messages/new">登録</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
}

header .header-container {
  width: 1020px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.logo {
  flex: 1;
}

.logo a {
  font-size: 24px;
  color: #41b883;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.nav-menu li {
  display: inline-block;
  margin-left: 25px;
}

.nav-menu li a {
  color: #41b883;
}
</style>
