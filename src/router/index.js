/*
 * @Author: your name
 * @Date: 2021-05-26 10:51:56
 * @LastEditTime: 2021-06-03 15:46:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro-master\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: constantRouterMap.concat(asyncRouterMap)
})
