<template>
    <h3>map</h3>
    <area-property v-if='area.length'></area-property>
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
</style>
