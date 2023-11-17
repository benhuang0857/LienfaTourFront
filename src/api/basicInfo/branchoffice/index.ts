import request from '@/config/axios'
import type { BranchOffice } from './types'

//mock -> /apiv1/basic-info/headquarter/get
export const getAllApi = () => {
  return request.get({ url: 'http://127.0.0.1:8000/api/branchoffice' })
}

export const getOneApi = (id: string): Promise<IResponse<BranchOffice>> => {
  return request.get({ url: 'http://127.0.0.1:8000/api/branchoffice/' + id })
}

export const addOneApi = (data: Partial<BranchOffice>): Promise<IResponse<BranchOffice>> => {
  return request.post({ url: 'http://127.0.0.1:8000/api/branchoffice', data })
}

export const updateOneApi = (
  id: string,
  data: Partial<BranchOffice>
): Promise<IResponse<BranchOffice>> => {
  return request.put({ url: 'http://127.0.0.1:8000/api/branchoffice/' + id, data })
}

export const killOneApi = (id: string): Promise<IResponse<BranchOffice>> => {
  return request.delete({ url: 'http://127.0.0.1:8000/api/branchoffice/' + id })
}
