<template>
  <div class="hello">
    <h1>Карта оренбурга</h1>

    <div>
      <orenburg-map></orenburg-map>
    </div>
  </div>
</template>

<script>

import OrenburgMap from './OrenburgMap.vue'
export default {

  name: 'MapSvg',
  components: {
    OrenburgMap
  },
  props: {
    msg: String
  },
  data(){
    return {
    }
  },
}
</script>
