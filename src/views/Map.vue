<template>
    <div style='display:flex'>
     
        <h3>map</h3>
        <map-svg />
        <transition name="slide-fade">
            <area-property v-if='area.length&&!close'></area-property>
        </transition>
    </div>
</template>
<script>
import {provide, ref} from 'vue';
import MapSvg from '../components/MapSvg.vue'
import AreaProperty from '../components/AreaProperty.vue';


export default {
    setup() {
        let area = ref([])
        let close = ref(0)
        provide('area', area)
        provide('close', close)
        return {area, close}
    },
    components:{
        MapSvg,
        AreaProperty
    },
    data(){
        return{
            property:[]
        }
    },


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
