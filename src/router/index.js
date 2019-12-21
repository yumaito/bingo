import Vue from 'vue'
import Router from 'vue-router'
import Bingo from '@/components/Bingo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bingo',
      component: Bingo
    }
  ]
})
