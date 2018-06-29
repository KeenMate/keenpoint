import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Structure from './views/Structure.vue';
import About from './views/About.vue';
import Webparts from './views/Webparts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/structure',
      name: 'structure',
      component: Structure,
      children: [
        {
          path: 'lists',
          name: 'lists',
          component: Webparts,
        },
      ]
    },
    {
      path: '/webparts',
      name: 'webparts',
      component: Webparts,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
