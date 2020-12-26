import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function login(data) {
  return request({
    // url: '/vue-element-admin/user/login',
    url: '/yj-auth/oauth/token',
    method: 'post',
    params: data
  })
}

export function getInfo() {
  return request({
    // url: '/vue-element-admin/user/info',
    url: '/yj-admin/users/me',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/yj-auth/oauth/logout',
    method: 'delete',
    headers: {
      'payload': getToken()
    }
  })



}

