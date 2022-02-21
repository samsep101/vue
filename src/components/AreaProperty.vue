<template>
  <div id="fon" v-on:click="doClose"></div>
  <div id="properties">
    <div class="cross"></div>
    <h2 class="h2-properties">properties</h2>
    <div class="property">
      <img
        src="https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13"
        alt=""
      />
      <div class="text">
        <h3>titile</h3>
        <p>desc</p>
      </div>
    </div>

    <div class="property">
      <img
        src="https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13"
        alt=""
      />
      <div class="text">
        <h3>titile</h3>
        <p>desc</p>
      </div>
    </div>
    <div class="property">
      <img
        src="https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13"
        alt=""
      />
      <div class="text">
        <h3>titile</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          iure non vel ipsum praesen
        </p>
      </div>
    </div>
  </div>
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
    return {};
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
  position: absolute;
  right: 0px;
  padding: 10px;
  /* border:3px solid black; */
  /* border-right: 2px solid rgb(224, 45, 45); */
  width: 600px;
  background-color: rgba(255, 255, 255);
  height: 70%;
  margin-top: -2rem;
}

.property {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.property img {
  width: 100px;
  height: 100px;
}
.text {
  display: flex;
  flex-direction: column;
}

.h2-properties {
  margin-top: 30px;
}

.cross {
  cursor: pointer; 
  position: absolute; 
  top: 20px; 
  left: 10px;
}

.cross:before, .cross:after {
  content: ""; 
  position: absolute; 
  width: 24px; 
  height: 4px; 
  background: rgb(87, 87, 87);
}
.cross:before {transform: rotate(45deg);}
.cross:after {transform: rotate(-45deg);}
</style>