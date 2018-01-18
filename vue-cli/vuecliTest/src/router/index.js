import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   components: {
    //     default: HelloWorld,
    //     left:hi1,
    //     right:hi2,
    //   }
    // },
    // {
    //   path: '/jsLi',
    //   name: 'Hello',
    //   components: {
    //     default: HelloWorld,
    //     left:hi2,
    //     right:hi1,
    //   }
    // }
    // {
    //   path: '/hi',
    //   component: hi,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'HelloWorld/hi',
    //       component: hi
    //     },
    //     {
    //       path: 'hi1',
    //       name: 'hi1',
    //       component: hi1
    //     },
    //     {
    //       path: 'hi2',
    //       name: 'hi2',
    //       component: hi2
    //     }
    //   ]
    // }
    {
      path: '/',
      name: 'hello',
      component: HelloWorld,
      alias : '/home1'
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/hi1',
      component: hi1,
      alias: '/jsLi'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
