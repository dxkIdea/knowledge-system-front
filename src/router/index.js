import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/user/Login.vue'

Vue.use(VueRouter);

/*定义路由规则常量*/
export const Routes = [
    {
        path: '/login',
        component: Login,
        name: 'Login'
    }
]

/*定义创建Route对象*/
const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: Routes
})

export default Router