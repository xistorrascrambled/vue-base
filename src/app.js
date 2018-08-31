import Vue from "vue";

const app = new Vue({
  data: {
    helloworld: "hello Panda"
  },
  template: '<div id="app">{{helloworld}}</div>'
});

export { app };
