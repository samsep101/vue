<template>
    <div :id="svgId" class="svg-container"></div>
</template>

<script>
    
    import austriaMap from "../assets/austriaMap"
    import { provide } from '@vue/runtime-core';
    import {inject} from 'vue'
// import func from 'vue-editor-bridge';
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
                const svgContainer = this.$svg("austriaMap").size('90%', '90%').viewbox(0, 0, this.mapAttr.viewBoxWidth, this.mapAttr.viewBoxHeight);
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
                });
                element.mouseover(function(){
                    this.node.attributes["fill"].value = 'grey';
                });
                element.mouseout(function(){
                    if(this.node.attributes['fill'].value == 'grey')
                        this.node.attributes["fill"].value = '#2f6dbf';
                    
                });

                
            },
          areaChange(mapId,title){

              this.area = title;
            }
        }

    }
</script>