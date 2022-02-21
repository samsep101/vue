<template>
  <div id="fon" v-on:click="doClose" v-if="area.length && !close"></div>
  <transition name="slide-fade">
    <div id="properties" v-if="area.length && !close">
      <span class="close" v-on:click="doClose">&rarr;</span>
      <h2 class="h2-properties">properties</h2>
      <template v-for="property of properties">
        <div class="property">
          <div class="images">
            <template v-for="image of property.images">
              <img v-bind:src="image.src" v-bind:alt="image.src" />
            </template>
          </div>

          <div class="text">
            <h3>{{ property.title }}</h3>
            <p>{{ property.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </transition>
</template>
<script>
import { inject } from "vue";
export default {
  setup() {
    let area = inject("area");
    let close = inject("close");

    return { area, close };
  },
  name: "AreaProperty",
  data() {
    return {
      properties: [
        {
          title: "Квартира в Москве",
          description:
            "Молодая, красивая и одинокая квартира в москве ждет тебя!!",
          images: [
            {
              src: "https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13",
              alt: "Первая фотка",
            },
            {
              src: "https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13",
              alt: "Вторая фотка",
            },
            {
              src: "https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13",
              alt: "Третья фотка",
            },
          ],
        },
      ],
    };
  },
  methods: {
    closeProperty() {
      if (this.area.length > 0) this.close = 1;
    },
    doClose() {
      this.close = 1;
    },
  },
};
</script>
<style >
#fon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  /* margin-top: 2rem; */
}
#properties {
  position: fixed;
  right: 0px;
  padding: 10px;
  /* border:3px solid black; */
  /* border-right: 2px solid rgb(224, 45, 45); */
  width: 600px;
  background-color: rgba(255, 255, 255);
  height: 100%;
  margin-top: -2rem;
}

.property {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.property img {
  width: 150px;
  height: 150px;
}
.text {
  display: flex;
  flex-direction: column;
}

.h2-properties {
  margin-top: 30px;
}

.close {
  margin-left: -60px;
  font-size: 2rem;
  background-color: antiquewhite;
  border-radius: 20px;
  width: 25px;
  height: 25px;
  padding: 0.1rem 0.4rem;
  cursor: pointer;
}

.cross:before,
.cross:after {
  content: "";
  position: absolute;
  width: 24px;
  height: 4px;
  background: rgb(87, 87, 87);
}
.cross:before {
  transform: rotate(45deg);
}
.cross:after {
  transform: rotate(-45deg);
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  /* right: -600px; */
  transform: translateX(600px);
  /* opacity: 0; */
}
</style>