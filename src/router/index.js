import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import People from '@/components/People'
import Recruit from '@/components/Recruit'
import Consult from '@/components/Consult'
// import News from '@/components/News'
// import Location from '@/components/Location'
// import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
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
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: News
    // },
    // {
    //   path: '/location',
    //   name: 'location',
    //   component: Location
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact
    // },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
    {
      path: '/consult',
      name: 'consult',
      component: Consult
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
