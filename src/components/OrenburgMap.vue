<template>
    <div :id="svgId" class="svg-container"></div>
</template>

<script>
    
    import austriaMap from "../assets/austriaMap"
    //import { provide } from '@vue/runtime-core';
    import {inject} from 'vue'
    export default {
        setup(){
            let area = inject('area');

            return {area};
        },
        name: "OrenburgMap",
        data() {
            return {
                svgId: "austriaMap",
                mapAttr: {
                    viewBoxWidth: 1780,
                    viewBoxHeight: 1000,
                    imageWidth: 1780,
                    imageHeight: 1000,
                },
                svgContainer: null
            }
        },
        mounted() {

            this.generateVenueMap()
        },
        
        methods: {
            generateVenueMap () {
                const mapData = austriaMap.g.path
                const svgContainer = this.$svg("austriaMap").size('100%', '100%').viewbox(-200, 0, this.mapAttr.viewBoxWidth, this.mapAttr.viewBoxHeight);
                this.svgContainer = svgContainer;
                mapData.forEach((pathObj) => {
                    this.generatePath(svgContainer, pathObj);
                })
            },
            generatePath(svgCont, pathObj) {
                const vue = this
                const attrs = {
                    'fill': "#2f6dbf",
                    'stroke': "white",
                    'stroke-width': 2,
                    'title': pathObj["-title"],
                    'map-id': pathObj["-id"]
                };

                const element = svgCont.path(pathObj["-d"]).attr(attrs);


                element.click(function(){
                  const mapId = this.node.attributes["map-id"].value;
                  const title = this.node.attributes["title"].value;

                  //this здесь элемент а не vue приложение

                  const id = this.node.attributes["fill"];
                  this.node.attributes["fill"].value = 'red';
                  vue.areaChange(mapId,title);
                })

                
            },
          areaChange(mapId,title){

              this.area = title;
            }
        }

    }
</script>