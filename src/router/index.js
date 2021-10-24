import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

/*定义路由规则常量*/
export const Routes = [
    //http://127.0.0.1:8080/ --> 登录页面
    {path: "", redirect: '/login'},
    //404
    {path: '/404', component: () => import('@/views/404'), hidden: true},
    //登录
    {path: '/login', component: () => import('@/views/login/index'), hidden: true},
]

/*定义创建Route对象*/
const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: Routes
})

export default Router