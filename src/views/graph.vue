<template>
  <div id="cy" class="cy-box">
  </div>
</template>

<script>
import cytoscape from "cytoscape";
import edgehandles from "cytoscape-edgehandles";

cytoscape.use(edgehandles);
let defaults = {
  layout: {
    name: "grid",
    rows: 2,
    cols: 2
  },
  style: [
    {
      selector: "node",
      style: {
        content: "data(name)"
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "target-arrow-shape": "triangle"
      }
    },
    // some style for the extension
    {
      selector: ".eh-handle",
      style: {
        "background-color": "red",
        width: 12,
        height: 12,
        shape: "ellipse",
        "overlay-opacity": 0,
        "border-width": 12, // makes the handle easier to hit
        "border-opacity": 0
      }
    },
    {
      selector: ".eh-hover",
      style: {
        "background-color": "red"
      }
    },
    {
      selector: ".eh-source",
      style: {
        "border-width": 2,
        "border-color": "red"
      }
    },
    {
      selector: ".eh-target",
      style: {
        "border-width": 2,
        "border-color": "red"
      }
    },
    {
      selector: ".eh-preview, .eh-ghost-edge",
      style: {
        "background-color": "red",
        "line-color": "red",
        "target-arrow-color": "red",
        "source-arrow-color": "red"
      }
    },
    {
      selector: ".eh-ghost-edge.eh-preview-active",
      style: {
        opacity: 0
      }
    }
  ]
};

export default {
  data() {
    return {
      nodes: [
        { data: { id: "a", name: "a", color: "red" } },
        { data: { id: "b", name: "b" } },
        { data: { id: "c", name: "c" } }
      ],
      edges: [
        {
          data: { id: "ab", source: "a", target: "b", label: "A", color: "red" }
        },
        {
          data: {
            id: "bc",
            source: "b",
            target: "c",
            label: "Y",
            color: "green"
          }
        },
        { data: { id: "ca", source: "c", target: "a", label: "T" } },
        { data: { source: "c", target: "c", label: "T" } }
      ]
    };
  },
  methods: {
    initChart() {
      let config = Object.assign(
        {},
        {
          container: document.getElementById("cy"),
          style: [
            {
              selector: "node",
              css: {
                content: "data(name)"
              }
            },
            {
              selector: "edge",
              css: {
                // "curve-style": "bezier",
                // "target-arrow-shape": "trianle"
              },
              style: {
                label: "data(label)",
                "text-margin-y": "20px",
                width: 3,
                "line-color": "#ccc",
                "target-arrow-color": "#ccc",
                "target-arrow-shape": "triangle"
              }
            }
          ],
          layout: {
            name: "grid"
          },
          elements: {
            nodes: this.nodes,
            edges: this.edges
          }
        },
        defaults
      );
      let cy = cytoscape(config);
      cy.on("tap", "node", function(evt) {
        var node = evt.target[0];
        console.log("tapped ", node);
      });
      cy.on("tap", "edge", function(evt) {
        var edge = evt.target[0];
        console.log("tapped ", edge);
      });
      cy.nodes().forEach(item => {
        item.css("background-color", item._private.data.color || "green");
      });
      cy.edges().forEach(item => {
        console.log(item);
        item.css("color", item._private.data.color || "green");
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  }
};
</script>

<style lang="css" scoped>
.cy-box {
  height: 500px;
}
</style>
