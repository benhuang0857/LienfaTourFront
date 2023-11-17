import request from '@/config/axios'
import type { Country, CountryOption } from './types'

//mock -> /apiv1/basic-info/headquarter/get
export const getAllApi = () => {
  return request.get({ url: 'http://127.0.0.1:8000/api/country' })
}

export const getCountryOptionApi = (): Promise<IResponse<CountryOption>> => {
  return request.get({ url: 'http://127.0.0.1:8000/api/country' })
}

export const getOneApi = (id: string): Promise<IResponse<Country>> => {
  return request.get({ url: 'http://127.0.0.1:8000/api/country/' + id })
}

export const addOneApi = (data: Partial<Country>): Promise<IResponse<Country>> => {
  return request.post({ url: 'http://127.0.0.1:8000/api/country', data })
}

export const updateOneApi = (id: string, data: Partial<Country>): Promise<IResponse<Country>> => {
  return request.put({ url: 'http://127.0.0.1:8000/api/country/' + id, data })
}

export const killOneApi = (id: string): Promise<IResponse<Country>> => {
  return request.delete({ url: 'http://127.0.0.1:8000/api/country/' + id })
}
