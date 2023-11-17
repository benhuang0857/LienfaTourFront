import request from '@/config/axios'
import type { Continent } from './types'

//mock -> /apiv1/basic-info/headquarter/get
export const getAllApi = () => {
  return request.get({ url: 'http://127.0.0.1:8000/api/continent' })
}

export const getOneApi = (id: string): Promise<IResponse<Continent>> => {
  return request.get({ url: 'http://127.0.0.1:8000/api/continent/' + id })
}

export const addOneApi = (data: Partial<Continent>): Promise<IResponse<Continent>> => {
  return request.post({ url: 'http://127.0.0.1:8000/api/continent', data })
}

export const updateOneApi = (
  id: string,
  data: Partial<Continent>
): Promise<IResponse<Continent>> => {
  return request.put({ url: 'http://127.0.0.1:8000/api/continent/' + id, data })
}

export const killOneApi = (id: string): Promise<IResponse<Continent>> => {
  return request.delete({ url: 'http://127.0.0.1:8000/api/continent/' + id })
}
