import request from '@/utlis/request'

//定义登录方法
export function login(loginInfo) {
    const url = '/member/login';
    /*return request({
        url: '/member/login',
        method: 'post',
        data: JSON.stringify(data1),
        header: {'Content-Type': 'application/json'}
    }).then(function (res) {
        alert(res.status);
    }).catch(function (res) {
        alert(res.message);
    })*/
    request.post(url,JSON.stringify(loginInfo),{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (rsp) {
        alert(rsp.status);
    }).catch(function (rsp) {
        alert(rsp.message);
    })
}