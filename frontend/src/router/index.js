import Vue from 'vue'
import Router from 'vue-router'
import Developer from '@/components/Developer'
import Intro from '@/components/Intro'
import Issues from '@/components/Issues'
import Sign from '@/components/Sign'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    }, {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [{
        path: '',
        component: Issues
      }, {
        path: 'developer',
        component: Developer
      }, {
        path: 'sign',
        component: Sign
      }]
    }
  ]
})
