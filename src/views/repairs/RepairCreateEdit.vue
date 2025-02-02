<template>
  <div class="app-container">
    <el-card>
      <h2>{{ isEdit ? 'Edit Repair' : 'Create Repair' }}</h2>

      <el-form :model="formData" label-width="120px">
        <el-form-item label="Instrument ID">
          <el-input v-model="formData.instrumentId"></el-input>
        </el-form-item>

        <el-form-item label="Status">
          <el-select v-model="formData.status" placeholder="Select status">
            <el-option label="Requested" value="Requested" />
            <el-option label="In Progress" value="In Progress" />
            <el-option label="Awaiting Approval" value="Awaiting Approval" />
            <el-option label="Completed" value="Completed" />
          </el-select>
        </el-form-item>

        <el-form-item label="Price Estimate">
          <el-input v-model="formData.priceEstimate" type="number"></el-input>
        </el-form-item>

        <el-form-item label="Final Price">
          <el-input v-model="formData.finalPrice" type="number"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">Submit</el-button>
          <el-button @click="cancelForm">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { fetchRepairById, createRepair, updateRepair } from '@/api/repairs'

export default {
  name: 'RepairCreateEdit',
  data() {
    return {
      formData: {
        instrumentId: '',
        status: 'Requested',
        priceEstimate: 0,
        finalPrice: 0
      }
    }
  },
  computed: {
    isEdit() {
      return !!this.$route.params.id
    }
  },
  created() {
    if (this.isEdit) {
      this.loadRepair(this.$route.params.id)
    }
  },
  methods: {
    async loadRepair(id) {
      try {
        const response = await fetchRepairById(id)
        this.formData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async submitForm() {
      try {
        if (this.isEdit) {
          await updateRepair(this.$route.params.id, this.formData)
        } else {
          await createRepair(this.formData)
        }
        this.$message.success('Repair saved!')
        this.$router.push({ name: 'RepairsList' })
      } catch (error) {
        console.error(error)
        this.$message.error('Error saving repair.')
      }
    },
    cancelForm() {
      this.$router.push({ name: 'RepairsList' })
    }
  }
}
</script>