//import request from '@/utlis/request'
import VueRouter from '@/router/index'

//定义登录方法
export function login(loginInfo) {
    /*const url = '/member/login';
    request.post(url,JSON.stringify(loginInfo),{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (rsp) {
        alert(rsp.status);
        VueRouter.push({path: '/404'})
    }).catch(function (rsp) {
        alert(rsp.message);
    })*/
    alert(loginInfo)
    VueRouter.push({path: '/layout'})
}