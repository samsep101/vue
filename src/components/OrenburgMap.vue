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
      width: window.innerWidth - window.innerWidth * 0.1,
      svgId: "austriaMap",
      mapAttr: {
        viewBoxWidth: 1780,
        viewBoxHeight: 800,
        imageWidth: 1780,
        imageHeight: 800,
      },
      svgContainer: null,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth - window.innerWidth * 0.1;
      this.svgContainer.size(this.width, "90%");
    });
    this.generateVenueMap();
  },
  computed: {},
  methods: {
    generateVenueMap() {
      const mapData = austriaMap.g.path;
      const svgContainer = this.$svg("austriaMap")
        .size(this.width, "90%")
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
          this.node.attributes["fill"].value = "#81abe3";
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
        else this.node.attributes["fill"].value = "#17529f";
      });
    },
  },
};
</script>