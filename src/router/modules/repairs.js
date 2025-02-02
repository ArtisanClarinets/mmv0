// src/router/modules/repairs.js
import Layout from '@/layout' // This is the main layout provided by vue-element-admin

const repairsRouter = {
  path: '/repairs',
  component: Layout,
  redirect: '/repairs/list',
  name: 'Repairs',
  meta: { title: 'Repairs', icon: 'el-icon-tools' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/repairs/RepairsList.vue'),
      name: 'RepairsList',
      meta: { title: 'Repair List', icon: 'list' }
    },
    {
      path: 'create',
      component: () => import('@/views/repairs/RepairCreateEdit.vue'),
      name: 'CreateRepair',
      meta: { title: 'New Repair', icon: 'edit' }
    },
    {
      path: ':id/edit',
      component: () => import('@/views/repairs/RepairCreateEdit.vue'),
      name: 'EditRepair',
      meta: { title: 'Edit Repair', noCache: true, activeMenu: '/repairs/list' },
      hidden: true
    },
    {
      path: ':id',
      component: () => import('@/views/repairs/RepairDetails.vue'),
      name: 'RepairDetails',
      meta: { title: 'Repair Details', noCache: true, activeMenu: '/repairs/list' },
      hidden: true
    }
  ]
}

export default repairsRouter