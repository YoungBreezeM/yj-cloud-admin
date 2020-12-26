import request from '@/utils/request'

export function del(path) {
  return request({
    url: '/yj-resource/files',
    method: 'delete',
    params: { path: path}
  })
}
