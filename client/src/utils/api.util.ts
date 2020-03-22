import ky from 'ky'

import { apiBaseUrl } from 'configs/api.config'

const getApiUrl = (url: string) => `${apiBaseUrl}${url}`

const get = (url: string) => ky.get(getApiUrl(url))

const post = <TData extends object>(url: string, data?: TData) =>
  ky.post(getApiUrl(url), { json: data })

const put = <TData extends object>(url: string, data?: TData) =>
  ky.put(getApiUrl(url), { json: data })

const _delete = (url: string) => ky.delete(getApiUrl(url))

export const api = {
  get,
  post,
  put,
  delete: _delete,
}
