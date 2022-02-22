<template>
  <div class="container_slider_css">
    <img class="photo_slider_css" src="../assets/images/slider1.jpeg" alt="">
    <img class="photo_slider_css" src="../assets/images/slider2.png" alt="">
    <img class="photo_slider_css" src="../assets/images/slider3.jpg" alt="">
    <img class="photo_slider_css" src="../assets/images/slider4.png" alt="">
  </div>
  <div class="InfoNews">
    <div class="container">
      <div class="elements">
        <h1>Новости</h1>
        <h2>Совкомбанк Лизинг будет докапитализирован на 1 млрд рублей</h2>
        <div class="line"></div>
        <img src="../assets/images/imageNews.jpg" alt="">
        <p>Совкомбанк докапитализирует ООО «Совкомбанк лизинг» на сумму 1 млрд в связи с
          высокими темпами роста бизнеса компании. Докапитализация будет
          произведена путем внесения единственным участником – Совкомбанком, вклада в имущество компании. </p>
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
.container {
  max-width: 1100px;
  margin: 0 auto;
}

.elements h1{
  margin: 40px 0px;
}

.elements img {
  margin-top: 20px;
}

.elements p {
  margin-bottom: 50px;
  width: 700px;
}

.line {
  width: 100%;
  height: 1px;
  background-color: gray;
}

.container_slider_css {
  margin: 40px auto;
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
}
.photo_slider_css{position:absolute;animation:round 16s infinite;opacity:0;width:100%}
@keyframes round {
  25%{opacity:1}
  40%{opacity:0}
}
img:nth-child(1){animation-delay:12s}
img:nth-child(2){animation-delay:8s}
img:nth-child(3){animation-delay:4s}
img:nth-child(4){animation-delay:0}
@media(min-width:0px) and (max-width:320px) {
  .container_slider_css{width:80%;height:190px}
}
@media(min-width:321px) and (max-width:480px) {
  .container_slider_css{width:80%;height:190px}
}

@media (max-width: 1000px) {
  .container_slider_css {
    z-index: -2;
  }
}
</style>