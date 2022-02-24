<template>
  <div class="contact">
    <div class="container">
      <div class="elemets">
        <h1>Контакты</h1>
        <div class="contact-div-inner">
          <div class="name-contact">Физическим лицам</div>
          <div class="contact-number">
            <p class="fw-700 m-4-0">8 800 100 00 06</p>
            <p>Звонок по России (бесплатно)</p>
            <p class="fw-700 m-4-0">+7 495 988 00 00</p>
            <p>Для звонков из-за рубежа (платно)</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Корпоративным<br> клиентам</div>
          <div class="contact-number">
            <p>Банковские гарантии, кредитование, электронная подпись</p>
            <p class="fw-700 m-4-0">8 800 200 54 14 </p>
            <p> Звонок по России (бесплатно)</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Центр обслуживания<br> участников закупок</div>
          <div class="contact-number">
            <p>Единый центр обслуживания бизнеса Совкомбанка</p>
            <p class="fw-700 m-4-0">8 800 100 10 20</p>
            <p>Звонок по России (бесплатно)</p>
            <p class="fw-700 m-4-0">+7 495 411 54 14</p>
            <p class="m-4-0">Для звонков по Москве<br>fintender@sovcombank.ru</p>
            <p>Официальный e-mail<br>fintender.ru</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Пресс-служба</div>
          <div class="contact-number">
            <p>smi@sovcombank.ru <br> Официальный e-mail пресс-службы</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Брокерское и<br> депозитарное<br> обслуживание</div>
          <div class="contact-number">
            <p class="fw-700 m-4-0">8 800 302 66 96</p>
            <p>Звонок по России (бесплатно)</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Клиентам Wealth<br> Managment</div>
          <div class="contact-number">
            <p class="fw-700 m-4-0">8 800 350 00 06</p>
            <p>Звонок по России (бесплатно)</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Совкомбанк<br> страхование (АО)</div>
          <div class="contact-number">
            <p class="fw-700 m-4-0">8 800 100 21 00 </p>
            <p>Звонок по России (бесплатно)</p>
            <p>sovcomins.ru</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Совкомбанк Жизнь</div>
          <div class="contact-number">
            <p class="fw-700 m-4-0">8 800 510 35 10 </p>
            <p> Звонок по России (бесплатно)</p>
            <p>sovcomlife.ru</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="contact-div-inner">
          <div>Совкомбанк Лизинг</div>
          <div class="contact-number">
            <p class="fw-700 m-4-0">8 800 775 47 61 </p>
            <p>Звонок по России (бесплатно)</p>
            <p class="fw-700 m-4-0">8 495 646 19 68</p>
            <p>Для звонков по Москве<br>
              sovcombank-leasing.ru</p>
          </div>
        </div>

        <div class="line"></div>
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
.contact {
  margin-top: 50px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-div-inner {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 20px;
}

.elemets {
  width: 550px;
}

.elemets > h1 {
  margin-bottom: 50px;
}

.line {
  width: 900px;
  height: 0.5px;
  background-color: gray;
  position: absolute;
}

.contact-number p {
  margin-left: 30px;
  width: 250px;
}

.fw-700 {
  font-weight: 700;
}

.m-4-0 {
  margin: 4px 0px;
}

@media (max-width: 1100px) {
  .elemets {
    width: 0px;
  }

  .contact-div-inner {
    display: block;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 25px;
  }

  .line {
    width: 100%;
    height: 0.5px;
    background-color: gray;
    position: block;
    z-index: -2;

    width: 0px;
    height: 0.5px;
    background-color: gray;
    position: absolute;
  }

  .contact-number {
    margin-top: 25px;
  }

  .elemets > h1 {
    margin-bottom: 50px;
    margin-left: 30px;
  }
}
</style>