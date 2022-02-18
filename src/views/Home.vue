<template>
  <div class="main">
    <div class="container">
      <div class="inner">
        <div class="block-info">
          <h1>Сайт Совкомбанка</h1>
          <p class="benefit">Привычная выгода в удобном формате</p>
          <p><img src="../assets/images/1.png" width="30" height="30" alt=""> Все возможности карты «Халва», акции и магазины</p>
          <p><img src="../assets/images/2.png" width="30" height="30" alt=""> Управление вашими кредитами, вкладами и счетами</p>
          <p><img src="../assets/images/3.png" width="30" height="30" alt=""> Платежи и переводы 24/7</p>

          <div class="app-download">
            <span><img src="../assets/images/4.png" width="30" height="30" alt=""></span>
            <span><img src="../assets/images/5.png" width="30" height="30" alt=""></span>
            <span><img src="../assets/images/6.png" width="30" height="30" alt=""></span>
          </div>

          <div class="q-code">
            <img src="../assets/images/q-code.png" width="80" height="80" alt="">
          </div>
        </div>
        <div class="block-image">
          <img src="../assets/images/7.webp" width="270" height="500" alt="">
        </div>

        <div class="block-triangle">
          <p>Карта «Халва», все продукты и счета на одном экране!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

.main {
  margin: 39px 0px;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}

.inner {
  display: flex;
  justify-content: space-between;
}

.block-info h1 {
  margin-bottom: 25px;
}

.block-info p {
  margin-bottom: 19px;
  display: flex;
  align-items: center;
}

.block-info > p > img {
  margin-right: 9px;
}

.block-info span {
  margin: 0px 10px;
}

.benefit {
  margin: 35px 0px;
}



.q-code {
  margin-top: 45px;
}

.block-triangle {
  margin-top: 200px;
  margin-bottom: 300px;
  background: #2f6dbf;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  color: #fff;
}

.block-triangle::after {
  content: '';
  position: absolute;
  left: 20px; bottom: -20px;
  border: 10px solid transparent;
  border-top: 10px solid #2f6dbf;
}

@media (max-width: 1100px) {
  .container {
    margin: 0px 10px;
  }

  .inner {
    /* display: block; */
    justify-content: none;
  }

  .app-download {
    text-align: center;
  }

  .q-code {
    text-align: center;
  }

  .block-image {
    margin: 19px 0px;
    text-align: center;
  }

  .block-triangle {
    margin: 20px 0px;
  }
}

</style>
