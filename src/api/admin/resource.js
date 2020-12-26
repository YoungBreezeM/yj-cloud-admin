import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/yj-admin/resources',
    method: 'get',
    params: queryParams
  })
}

export function detail(id) {
  return request({
    url: '/yj-admin/resources/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/yj-admin/resources',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/yj-admin/resources/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/yj-admin/resources',
    method: 'delete',
    params: { ids: ids }
  })
}

export function patch(id, data) {
  return request({
    url: '/yj-admin/resources/' + id,
    method: 'patch',
    data: data
  })
}
