import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/yj-admin/users',
    method: 'get',
    params: queryParams
  })
}

export function detail(id) {
  return request({
    url: '/yj-admin/users/' + id,
    method: 'get',
    params: {queryMode:1}
  })
}

export function add(data) {
  return request({
    url: '/yj-admin/users',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/yj-admin/users/',
    method: 'put',
    data: data
  })
}

export function patch(id, data) {
  return request({
    url: '/yj-admin/users/' + id,
    method: 'patch',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/yj-admin/users',
    method: 'delete',
    params: { ids: ids }
  })
}
