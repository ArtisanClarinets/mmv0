<template>
  <div class="app-container">
    <el-card>
      <h2>Repair Details</h2>
      <div>ID: {{ repair.id }}</div>
      <div>Instrument ID: {{ repair.instrumentId }}</div>
      <div>Status: {{ repair.status }}</div>
      <div>Price Estimate: {{ repair.priceEstimate }}</div>
      <div>Final Price: {{ repair.finalPrice }}</div>
      <el-button type="primary" @click="goBack">Back to List</el-button>
    </el-card>
  </div>
</template>

<script>
import { fetchRepairById } from '@/api/repairs'

export default {
  name: 'RepairDetails',
  data() {
    return {
      repair: {}
    }
  },
  async created() {
    this.loadRepair(this.$route.params.id)
  },
  methods: {
    async loadRepair(id) {
      try {
        const response = await fetchRepairById(id)
        this.repair = response.data
      } catch (error) {
        console.error(error)
      }
    },
    goBack() {
      this.$router.push({ name: 'RepairsList' })
    }
  }
}
</script>