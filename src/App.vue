<template>
  <header class="header">
    <div class="inner">
      <a href="/" class="logo"><img src="./assets/images/logo.png" width="25" height="25"><span>Совкомбанк</span></a>
      <div class="nav">
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul class="menu__box">
            <li><a class="menu__item"><router-link class="router-bank" to="/about-bank">О банке</router-link></a></li>
            <li><a class="menu__item"><router-link class="router-bank" to="/news">Новости</router-link></a></li>
            <li><a class="menu__item"><router-link class="router-bank" to="/contact">Контакты</router-link></a></li>
            <li><a class="menu__item"><router-link class="router-bank" to="/mortgage">Ипотека</router-link></a></li>
            <li><a class="menu__item"><router-link to='/map'>Карта области</router-link></a></li>
          </ul>
        </div>
        <router-link class="router-bank" to="/about-bank">О банке</router-link>
        <router-link class="router-bank" to="/news">Новости</router-link>
        <router-link class="router-bank" to="/contact">Контакты</router-link>
        <router-link class="router-bank" to="/mortgage">Ипотека</router-link>
        <router-link to='/map'>Карта области</router-link>
      </div>
      <div class="none"></div>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>

  <footer class="footer">
    <div class="inner">
      <div class="society">
        <a href="https://www.instagram.com/sovcombank/"><img src="./assets/images/instagram.png" width="25" height="25"></a>
        <a href="https://vk.com/sovcombank"><img src="./assets/images/vk.png" width="25" height="25"></a>
        <a href="https://www.facebook.com/sovcombank"><img src="./assets/images/facebook.png" width="25" height="25"></a>
        <a href="https://twitter.com/sovcombank"><img src="./assets/images/twitter.png" width="25" height="25"></a>
      </div>
      <div class="app-download">
        <a href="https://play.google.com/store/apps/details?id=ru.sovcomcard.halva.v1"><img src="./assets/images/playmarket.png" width="25" height="25"></a>
        <a href="https://apps.apple.com/ru/app/halva/id1208055056"><img src="./assets/images/applestore.png" width="25" height="25"></a>
      </div>
    </div>
  </footer>

</template>

<script>



export default {
  name: 'app',
  components:{

  }
}
</script>
<style>
</style>
