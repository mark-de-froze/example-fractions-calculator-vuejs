import Vue from 'vue'
import Router from 'vue-router'
// import IndexPage from '@/components/pages/Index'
// import HistoryPage from '@/components/pages/History'

const IndexPage = () => import('@/components/pages/Index')
const HistoryPage = () => import('@/components/pages/History')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryPage
    }
  ]
})
