import request from '@/utils/request'

// GET /instruments
export function fetchInstruments(params) {
  return request({
    url: '/instruments',
    method: 'get',
    params
  })
}

// GET /instruments/:id
export function fetchInstrumentById(id) {
  return request({
    url: `/instruments/${id}`,
    method: 'get'
  })
}

// POST /instruments
export function createInstrument(data) {
  return request({
    url: '/instruments',
    method: 'post',
    data
  })
}

// PUT /instruments/:id
export function updateInstrument(id, data) {
  return request({
    url: `/instruments/${id}`,
    method: 'put',
    data
  })
}