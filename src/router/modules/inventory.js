// src/router/modules/inventory.js
import Layout from '@/layout'

const inventoryRouter = {
  path: '/inventory',
  component: Layout,
  redirect: '/inventory/list',
  name: 'Inventory',
  meta: { title: 'Inventory', icon: 'el-icon-box' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/inventory/InventoryList.vue'),
      name: 'InventoryList',
      meta: { title: 'Parts List', icon: 'list' }
    },
    {
      path: 'create',
      component: () => import('@/views/inventory/InventoryCreateEdit.vue'),
      name: 'CreateInventory',
      meta: { title: 'New Part', icon: 'edit' }
    },
    {
      path: ':id/edit',
      component: () => import('@/views/inventory/InventoryCreateEdit.vue'),
      name: 'EditInventory',
      meta: { title: 'Edit Part', noCache: true, activeMenu: '/inventory/list' },
      hidden: true
    }
  ]
}

export default inventoryRouter