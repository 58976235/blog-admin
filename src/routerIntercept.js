/*
 * @Author: your name
 * @Date: 2021-06-03 19:52:10
 * @LastEditTime: 2021-06-05 19:09:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-vue-pro-master\src\routerIntercept.js
 */
import router from './router'
import store from './store'
router.beforeEach((to, from, next) => {
    if (to.path !== '/user/login') {
        store.dispatch('GetInfo')
    }
    next()
})
