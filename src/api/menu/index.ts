import request from '@/config/axios'

// export const getMenuListApi = () => {
//   return request.get({ url: '/menu/list' })
// }

export const getMenuListApi = () => {
  return request.get({ url: 'http://127.0.0.1:8000/api/menu' })
}
