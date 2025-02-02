// src/router/modules/customers.js
import Layout from '@/layout'

const customersRouter = {
  path: '/customers',
  component: Layout,
  redirect: '/customers/list',
  name: 'Customers',
  meta: { title: 'Customers', icon: 'el-icon-user' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/customers/CustomersList.vue'),
      name: 'CustomersList',
      meta: { title: 'Customer List', icon: 'list' }
    },
    {
      path: 'create',
      component: () => import('@/views/customers/CustomerCreateEdit.vue'),
      name: 'CreateCustomer',
      meta: { title: 'New Customer', icon: 'edit' }
    },
    {
      path: ':id/edit',
      component: () => import('@/views/customers/CustomerCreateEdit.vue'),
      name: 'EditCustomer',
      meta: { title: 'Edit Customer', noCache: true, activeMenu: '/customers/list' },
      hidden: true
    }
  ]
}

export default customersRouter