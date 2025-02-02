import request from '@/utils/request'

// GET /repairs
export function fetchRepairs(params) {
  return request({
    url: '/repairs',
    method: 'get',
    params
  })
}

// GET /repairs/:id
export function fetchRepairById(id) {
  return request({
    url: `/repairs/${id}`,
    method: 'get'
  })
}

// POST /repairs
export function createRepair(data) {
  return request({
    url: '/repairs',
    method: 'post',
    data
  })
}

// PUT /repairs/:id
export function updateRepair(id, data) {
  return request({
    url: `/repairs/${id}`,
    method: 'put',
    data
  })
}