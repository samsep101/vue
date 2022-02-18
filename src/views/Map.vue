<template>
    <h3>map</h3>
    <transition name="slide-fade">
        <area-property v-if='area.length'></area-property>
    </transition>
    <map-svg />
</template>
<script>
import {provide, ref} from 'vue';
import MapSvg from '../components/MapSvg.vue'
import AreaProperty from '../components/AreaProperty.vue';


export default {
    setup() {
        let area = ref([])
        provide('area', area)
        return {area}
    },
    components:{
        MapSvg,
        AreaProperty
    },
    data(){
        return{
            property:[],
        }
    }

}
</script>
<style>
    /* display: flex; */
    .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(600px);
  /* opacity: 0; */
}
</style>
