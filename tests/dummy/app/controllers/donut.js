import { later } from "@ember/runloop";
import Controller from "@ember/controller";
/* eslint ember/avoid-leaking-state-in-ember-objects: "off" */

export default Controller.extend({

  chart: null,
  legendVisible: true,
  lbuttonText: "Hide Legend",
  
  init() {
    this._super(...arguments);

    later(this, () => {
      this.data.columns.push(
        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2,
          0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3,
          0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2,
          0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1,
          0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2,
          0.2, 0.2
        ]);
      this.data.columns.push(
        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0,
          1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0,
          1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7,
          1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3,
          1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3,
          1.1, 1.3
        ]);
      this.data.columns.push(
        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8,
          1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2,
          2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8,
          2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8,
          1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0,
          2.3, 1.8
        ]);
      this.notifyPropertyChange("data");
    },
      1500);
  },

  data: {
      columns: [
        ["data1", 30],
        ["data2", 120],
      ],
      type: "donut"
    },

  // chart title
  title: { text: "Iris data from R" },
  donut: { title: "Iris Petal Width" },
  padding:  { top: 20 },

  actions: {
    toggleLegend() {
      let c = this.chart;
      this.toggleProperty("legendVisible");
      let v= this.legendVisible;
      let t = v ? "Hide Legend" : "Show Legend";
      this.set("lbuttonText", t);

      if (v) c.legend.show();
       else c.legend.hide();
    }
  }

});