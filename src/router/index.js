import Vue from 'vue'
import Router from 'vue-router'
import Exercise from '@/components/Exercise'
import Secondpage from '@/components/Secondpage'
import Thirdpage from '@/components/Thirdpage'
import Arraystuff from '@/components/Arraystuff'
import Game from '@/components/Game'
import mPesaTest from '@/components/mPesaTest'
import lilljune from '@/components/lilljune'

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
    {
      path: '/Arraystuff',
      name: 'Arraystuff',
      component: Arraystuff
    },
    {
      path: '/Game',
      name: 'Game',
      component: Game
    },
    {
      path: '/mPesaTest',
      name: 'mPesaTest',
      component: mPesaTest
    },
    {
      path: '/lilljune',
      name: 'lilljune',
      component: lilljune
    }
  ]
})

