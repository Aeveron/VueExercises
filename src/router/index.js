import Vue from 'vue'
import Router from 'vue-router'
import Exercise from '@/components/Exercise'
import Secondpage from '@/components/Secondpage'
import Thirdpage from '@/components/Thirdpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Exercise',
      component: Exercise
    },
    {
      path: '/Secondpage',
      name: 'Secondpage',
      component: Secondpage
    },
    {
      path: '/Thirdpage',
      name: 'Thirdpage',
      component: Thirdpage
    },
  ]
})

