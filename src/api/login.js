import request from '@/utlis/request'

//定义登录方法
export function login(data1) {
    return request({
        url: '/login',
        method: 'post',
        data: JSON.stringify({
            username: data1,
        }),
        header:{
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        alert(res.status);
    }).catch(function () {
        alert('error');
    })
}