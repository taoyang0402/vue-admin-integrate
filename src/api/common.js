// 首页请求
import request from '@/utils/request'

// 13  登录（  ISO_PI6000_Login  ）
export function ISO_PI6000_Login(data) {
  return request({
    url: '/nari-base/pi6000/login',
    method: 'post',
    async: false,
    cache: false,
    data
  })
}
// 14  退出登录（  ISO_PI6000_Login  ）
export function ISO_PI6000_Logout(params) {
  return request({
    url: '/nari-base/pi6000/loginOut', // isc
    method: 'get',
    params
  })
}

