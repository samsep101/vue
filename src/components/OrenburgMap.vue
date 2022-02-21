<template>
  <div :id="svgId" class="svg-container"></div>
</template>

<script>
import austriaMap from "../assets/austriaMap";
import { provide } from "@vue/runtime-core";
import { inject } from "vue";
// import func from 'vue-editor-bridge';
export default {
  setup() {
    let area = inject("area");
    let close = inject("close");
    let areaSvg = inject("areaSvg");
    return { area, close, areaSvg };
  },
  name: "OrenburgMap",
  data() {
    return {
      width: window.innerWidth,
      svgId: "austriaMap",
      mapAttr: {
        viewBoxWidth: window.innerWidth,
        viewBoxHeight: 1000,
        imageWidth: window.innerWidth,
        imageHeight: 1000,
      },
      svgContainer: null,
    };
  },
  mounted() {
    this.generateVenueMap();
  },
  computed: {},
  methods: {
    generateVenueMap() {
      const mapData = austriaMap.g.path;
      const svgContainer = this.$svg("austriaMap")
        .size("90%", "90%")
        .viewbox(0, 0, this.mapAttr.viewBoxWidth, this.mapAttr.viewBoxHeight);
      this.svgContainer = svgContainer;
      mapData.forEach((pathObj) => {
        this.generatePath(svgContainer, pathObj);
      });
    },
    generatePath(svgCont, pathObj) {
      const vue = this;
      const attrs = {
        fill: "#2f6dbf",
        stroke: "white",
        "stroke-width": 2,
        title: pathObj["-title"],
        "map-id": pathObj["-id"],
      };

      const element = svgCont.path(pathObj["-d"]).attr(attrs);

      element.click(function () {
        const mapId = this.node.attributes["map-id"].value;
        const title = this.node.attributes["title"].value;

        //this здесь элемент а не vue приложение
        const id = this.node.attributes["fill"];
        if (vue.area != this.node.attributes["title"].value) {
          if (vue.area != "") {
            console.log(vue.areaSvg);

            vue.areaSvg.node.attributes["fill"].value = "#2f6dbf";
            vue.area = "";
          }
          this.node.attributes["fill"].value = "red";
          vue.area = title;
          vue.areaSvg = this;
          vue.close = 0;
        } else {
          this.node.attributes["fill"].value = "#2f6dbf";
          vue.area = "";
        }
      });
      element.mouseover(function () {
        this.node.attributes["fill"].value = "#5392e6";
      });
      element.mouseout(function () {
        if (vue.area.indexOf(this.node.attributes["title"].value) == -1)
          this.node.attributes["fill"].value = "#2f6dbf";
        else this.node.attributes["fill"].value = "red";
      });
    },
  },
};
</script>