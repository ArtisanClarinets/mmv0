import request from '@/utils/request'

// GET /customers
export function fetchCustomers(params) {
  return request({
    url: '/customers',
    method: 'get',
    params
  })
}

// GET /customers/:id
export function fetchCustomerById(id) {
  return request({
    url: `/customers/${id}`,
    method: 'get'
  })
}

// POST /customers
export function createCustomer(data) {
  return request({
    url: '/customers',
    method: 'post',
    data
  })
}

// PUT /customers/:id
export function updateCustomer(id, data) {
  return request({
    url: `/customers/${id}`,
    method: 'put',
    data
  })
}