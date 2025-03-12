import HelloWorld from './components/HelloWorld.vue';

export {
  HelloWorld
};

export default {
  install(Vue) {
    Vue.component('HelloWorld', HelloWorld);
  },
};
