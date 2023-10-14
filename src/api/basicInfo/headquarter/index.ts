import request from '@/config/axios'
import type { Headquarter } from './types'

//mock -> /apiv1/basic-info/headquarter/get
export const getHeadquarterApi = (): Promise<IResponse<Headquarter>> => {
  return request.get({ url: 'http://127.0.0.1:8000/api/headquarter/1', method: 'get' })
}
