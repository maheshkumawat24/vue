import Vue from 'vue'
import App from './App.vue';
export const eventBus = new Vue({
  methods : {
    serverClicked(data) {
      console.log(data);
      this.$emit('serverClicked',data);
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
