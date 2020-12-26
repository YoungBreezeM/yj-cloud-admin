import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/yj-admin/menus',
    method: 'get',
    params: queryParams
  })
}

export function detail(id) {
  return request({
    url: '/yj-admin/menus/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/yj-admin/menus',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/yj-admin/menus/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/yj-admin/menus',
    method: 'delete',
    params: { ids: ids }
  })
}

export function patch(id, data) {
  return request({
    url: '/yj-admin/menus/' + id,
    method: 'patch',
    data: data
  })
}
