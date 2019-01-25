import Vue from 'vue'
import Router from 'vue-router'
import Exercise from '@/components/Exercise'
import Secondpage from '@/components/Secondpage'
import Thirdpage from '@/components/Thirdpage'
import Arraystuff from '@/components/Arraystuff'
import Game from '@/components/Game'
import DirectiveTest from '@/components/DirectiveTest'
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
      path: '/DirectiveTest',
      name: 'DirectiveTest',
      component: DirectiveTest
    },
    {
      path: '/lilljune',
      name: 'lilljune',
      component: lilljune
    }
  ]
})
