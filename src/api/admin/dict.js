import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/yj-admin/dictionaries',
    method: 'get',
    params: queryParams
  })
}

export function listByTypeCode(typeCode) {
  return request({
    url: '/yj-admin/dictionaries',
    method: 'get',
    params: {'typeCode': typeCode}
  })
}


export function detail(id) {
  return request({
    url: '/yj-admin/dictionaries/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/yj-admin/dictionaries',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/yj-admin/dictionaries/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/yj-admin/dictionaries',
    method: 'delete',
    params: {ids: ids}
  })
}

export function patch(id, data) {
  return request({
    url: '/yj-admin/dictionaries/' + id,
    method: 'patch',
    data: data
  })
}
