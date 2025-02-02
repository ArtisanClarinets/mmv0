import request from '@/utils/request'

// GET /inventory
export function fetchInventory(params) {
  return request({
    url: '/inventory',
    method: 'get',
    params
  })
}

// GET /inventory/:id
export function fetchPartById(id) {
  return request({
    url: `/inventory/${id}`,
    method: 'get'
  })
}

// POST /inventory
export function createPart(data) {
  return request({
    url: '/inventory',
    method: 'post',
    data
  })
}

// PUT /inventory/:id
export function updatePart(id, data) {
  return request({
    url: `/inventory/${id}`,
    method: 'put',
    data
  })
}