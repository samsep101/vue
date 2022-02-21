<template>
  <div style="display: flex">
    <h3>map</h3>
    <map-svg />

    <area-property></area-property>
  </div>
</template>
<script>
import { provide, ref } from "vue";
import MapSvg from "../components/MapSvg.vue";
import AreaProperty from "../components/AreaProperty.vue";

export default {
  setup() {
    let area = ref("");
    let close = ref(0);
    let areaSvg = ref("");
    provide("area", area);
    provide("close", close);
    provide("areaSvg", areaSvg);
    return { area, close, areaSvg };
  },
  components: {
    MapSvg,
    AreaProperty,
  },
  data() {
    return {
      property: [],
    };
  },
};
</script>