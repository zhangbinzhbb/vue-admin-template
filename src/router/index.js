import Vue from 'vue'
import Router from 'vue-router'
import { preFetchLib } from 'hel-micro'
console.log(' test ')
Vue.use(Router)

/* Layout */
import Layout from '@/layout'

const enableCustom = !!window.location.port
const fetchOptions = {
  custom: {
    host: 'http://localhost:7001',
    enable: enableCustom
  }
}

// import dd from 'lib-zhangbb-1'
// console.log('dd===>', dd)
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/someModule/*',
    component: () => import('@/views/subRender/index'),
  },

  // {
  //   // /child/* 都指向ChildPage组件
  //   path: '/someModule*', // vue-router@4.x path的写法为：'/child/:page*'
  //   name: 'child',
  //   component: () => import('@/views/dashboard/index')
  // },
  // await preFetchLib('lib-zhangbb', fetchOptions)

  // 第一种方式
  // {
  //   path: '/someModule',
  //   component: Layout,
  //   redirect: '/someModule/index',
  //   name: 'index',
  //   meta: { title: 'someModule', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'SomeModule',
  //       component: async() => {
  //         const mod = await preFetchLib('lib-zhangbb-1', fetchOptions)
  //         return mod.SomeModule
  //       },
  //       meta: { title: 'someModule', icon: 'table' }
  //     },
  //     {
  //       path: 'test',
  //       name: 'SomeModule',
  //       component: async() => {
  //         const mod = await preFetchLib('lib-zhangbb-1', fetchOptions)
  //         return mod.SomeModuleTest
  //       },
  //       meta: { title: 'someModule', icon: 'table' }
  //     },
  //     {
  //       path: 'child',
  //       name: 'SomeModule',
  //       component: async() => {
  //         const mod = await preFetchLib('lib-zhangbb-1', fetchOptions)
  //         return mod.SomeModuleChild
  //       },
  //       meta: { title: 'someModule', icon: 'table' }
  //     }
  //   ]
  // },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () =>
  //                 import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () =>
  //                 import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
