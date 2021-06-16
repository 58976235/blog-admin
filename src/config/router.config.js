// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: 'menu.dashboard', icon: 'home', keepAlive: true, bxAnaalyse, permission: ['dashboard'] }
      },
      // list
      {
        path: '/blogManager',
        name: 'BlogManager',
        component: RouteView,
        redirect: '/blogManager/articleManager',
        meta: { title: 'menu.blogManager', icon: 'table', permission: ['table'] },
        children: [
          {
            path: '/blogManager/articleManager/:pageNo([1-9]\\d*)?',
            name: 'articleManager',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/blogManager/ArticleManager'),
            meta: { title: 'menu.blogManager.articleManager', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/blogManager/commentManager',
            name: 'CommentManager',
            component: () => import('@/views/blogManager/CommentManager'),
            meta: { title: 'menu.blogManager.commentManager', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/blogManager/collectionManager',
            name: 'CollectionManager',
            component: () => import('@/views/blogManager/CollectionManager'),
            meta: { title: 'menu.blogManager.collectionManager', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/blogManager/linkManager',
            name: 'LinkManager',
            component: () => import('@/views/blogManager/linkManager'),
            meta: { title: 'menu.blogManager.linkManager', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/blogManager/ResourceManagement',
            name: 'ResourceManagement',
            component: () => import('@/views/blogManager/ResourceManagement'),
            meta: { title: 'menu.blogManager.resourceManagement', keepAlive: true, permission: ['table'] }
          }
        ]
      },
      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center'),
            meta: { title: 'menu.account.center', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: 'menu.account.settings', hideHeader: true, permission: ['user'] },
            redirect: '/account/settings/basic',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/basic',
                name: 'BasicSettings',
                component: () => import('@/views/account/settings/BasicSetting'),
                meta: { title: 'account.settings.menuMap.basic', hidden: true, permission: ['user'] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: {
                  title: 'account.settings.menuMap.security',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: 'account.settings.menuMap.custom', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: 'account.settings.menuMap.binding', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: {
                  title: 'account.settings.menuMap.notification',
                  hidden: true,
                  keepAlive: true,
                  permission: ['user']
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
