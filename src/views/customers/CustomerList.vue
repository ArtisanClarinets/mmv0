<template>
  <div class="app-container">
    <el-card>
      <div style="margin-bottom: 16px;">
        <el-button type="primary" @click="goCreate">Add Customer</el-button>
      </div>

      <el-table :data="customers" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="phone" label="Phone" />
        <el-table-column label="Actions" width="200">
          <template #default="{ row }">
            <el-button size="mini" type="warning" @click="goEdit(row.id)">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { fetchCustomers } from '@/api/customers'

export default {
  name: 'CustomersList',
  data() {
    return {
      customers: []
    }
  },
  created() {
    this.loadCustomers()
  },
  methods: {
    async loadCustomers() {
      try {
        const response = await fetchCustomers()
        this.customers = response.data || []
      } catch (error) {
        console.error(error)
      }
    },
    goCreate() {
      this.$router.push({ name: 'CreateCustomer' })
    },
    goEdit(id) {
      this.$router.push({ name: 'EditCustomer', params: { id } })
    }
  }
}
</script>