import Vue from 'vue'
import Router from 'vue-router'

import A404 from '@/components/A404'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import People from '@/components/People'
import Consult from '@/components/Consult'
import LandingBand from '@/components/LandingBand'

Vue.use(Router)

const router = new Router({
// export default new Router({
  routes: [
    {
      path: '/error',
      name: 'a404',
      component: A404
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/company',
      name: 'company',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/members',
      name: 'members',
      component: People
    },
    {
      path: '/consult',
      name: 'consult',
      component: Consult
    },
    {
      path: '/landing/band',
      name: 'landing_band',
      component: LandingBand
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  if (to.name == '' || to.name == null) {
    console.log('to name is none')
    next({name: 'a404'})
  } else {
    next()
  }
})

export default router
