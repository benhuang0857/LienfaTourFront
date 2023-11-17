import request from '@/config/axios'
import type { Headquarter } from './types'

//mock -> /apiv1/basic-info/headquarter/get
export const getAllApi = () => {
  return request.get({ url: 'http://127.0.0.1:8000/api/headquarter' })
}

export const getOneApi = (id: string): Promise<IResponse<Headquarter>> => {
  return request.get({ url: 'http://127.0.0.1:8000/api/headquarter/' + id })
}

export const addOneApi = (data: Partial<Headquarter>): Promise<IResponse<Headquarter>> => {
  return request.post({ url: 'http://127.0.0.1:8000/api/headquarter', data })
}

export const updateOneApi = (
  id: string,
  data: Partial<Headquarter>
): Promise<IResponse<Headquarter>> => {
  return request.put({ url: 'http://127.0.0.1:8000/api/headquarter/' + id, data })
}

export const killOneApi = (id: string): Promise<IResponse<Headquarter>> => {
  return request.delete({ url: 'http://127.0.0.1:8000/api/headquarter/' + id })
}
