<template>
  <div class="app-container">
    <el-card>
      <h2>{{ isEdit ? 'Edit Instrument' : 'Create Instrument' }}</h2>

      <el-form :model="formData" label-width="120px">
        <el-form-item label="Maker">
          <el-input v-model="formData.maker"></el-input>
        </el-form-item>

        <el-form-item label="Model">
          <el-input v-model="formData.model"></el-input>
        </el-form-item>

        <el-form-item label="Serial Number">
          <el-input v-model="formData.serialNumber"></el-input>
        </el-form-item>

        <el-form-item label="Last Service">
          <el-date-picker v-model="formData.lastService" type="date" placeholder="Pick a date" />
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
import { fetchInstrumentById, createInstrument, updateInstrument } from '@/api/instruments'

export default {
  name: 'InstrumentCreateEdit',
  data() {
    return {
      formData: {
        maker: '',
        model: '',
        serialNumber: '',
        lastService: ''
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
      this.loadInstrument(this.$route.params.id)
    }
  },
  methods: {
    async loadInstrument(id) {
      try {
        const response = await fetchInstrumentById(id)
        this.formData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async submitForm() {
      try {
        if (this.isEdit) {
          await updateInstrument(this.$route.params.id, this.formData)
        } else {
          await createInstrument(this.formData)
        }
        this.$message.success('Instrument saved!')
        this.$router.push({ name: 'InstrumentsList' })
      } catch (error) {
        console.error(error)
        this.$message.error('Error saving instrument.')
      }
    },
    cancelForm() {
      this.$router.push({ name: 'InstrumentsList' })
    }
  }
}
</script>