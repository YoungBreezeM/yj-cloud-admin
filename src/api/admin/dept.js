import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/yj-admin/depts',
    method: 'get',
    params: queryParams
  })
}

export function detail(id) {
  return request({
    url: '/yj-admin/depts/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/yj-admin/depts',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/yj-admin/depts/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/yj-admin/depts',
    method: 'delete',
    params: { ids: ids }
  })
}

export function patch(id, data) {
  return request({
    url: '/yj-admin/depts/' + id,
    method: 'patch',
    data: data
  })
}
