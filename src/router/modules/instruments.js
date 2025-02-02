// src/router/modules/instruments.js
import Layout from '@/layout'

const instrumentsRouter = {
  path: '/instruments',
  component: Layout,
  redirect: '/instruments/list',
  name: 'Instruments',
  meta: { title: 'Instruments', icon: 'el-icon-document-copy' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/instruments/InstrumentsList.vue'),
      name: 'InstrumentsList',
      meta: { title: 'Instruments List', icon: 'list' }
    },
    {
      path: 'create',
      component: () => import('@/views/instruments/InstrumentCreateEdit.vue'),
      name: 'CreateInstrument',
      meta: { title: 'New Instrument', icon: 'edit' }
    },
    {
      path: ':id/edit',
      component: () => import('@/views/instruments/InstrumentCreateEdit.vue'),
      name: 'EditInstrument',
      meta: { title: 'Edit Instrument', noCache: true, activeMenu: '/instruments/list' },
      hidden: true
    }
  ]
}

export default instrumentsRouter