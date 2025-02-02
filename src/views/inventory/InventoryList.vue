<template>
  <div class="app-container">
    <el-card>
      <div style="margin-bottom: 16px;">
        <el-button type="primary" @click="goCreate">Add Part</el-button>
      </div>

      <el-table :data="inventoryList" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="name" label="Part Name" />
        <el-table-column prop="type" label="Type" />
        <el-table-column prop="quantity" label="Quantity" />
        <el-table-column prop="price" label="Price" />
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
import { fetchInventory } from '@/api/inventory'

export default {
  name: 'InventoryList',
  data() {
    return {
      inventoryList: []
    }
  },
  created() {
    this.loadInventory()
  },
  methods: {
    async loadInventory() {
      try {
        const response = await fetchInventory()
        this.inventoryList = response.data || []
      } catch (error) {
        console.error(error)
      }
    },
    goCreate() {
      this.$router.push({ name: 'CreateInventory' })
    },
    goEdit(id) {
      this.$router.push({ name: 'EditInventory', params: { id } })
    }
  }
}
</script>