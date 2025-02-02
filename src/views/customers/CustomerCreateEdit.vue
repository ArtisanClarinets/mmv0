<template>
  <div class="app-container">
    <el-card>
      <h2>{{ isEdit ? 'Edit Customer' : 'Create Customer' }}</h2>

      <el-form :model="formData" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>

        <el-form-item label="Email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>

        <el-form-item label="Phone">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>

        <!-- Add any other fields, e.g. organizationId, address, etc. -->

        <el-form-item>
          <el-button type="primary" @click="submitForm">Submit</el-button>
          <el-button @click="cancelForm">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { fetchCustomerById, createCustomer, updateCustomer } from '@/api/customers'

export default {
  name: 'CustomerCreateEdit',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: ''
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
      this.loadCustomer(this.$route.params.id)
    }
  },
  methods: {
    async loadCustomer(id) {
      try {
        const response = await fetchCustomerById(id)
        this.formData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async submitForm() {
      try {
        if (this.isEdit) {
          await updateCustomer(this.$route.params.id, this.formData)
        } else {
          await createCustomer(this.formData)
        }
        this.$message.success('Customer saved!')
        this.$router.push({ name: 'CustomersList' })
      } catch (error) {
        console.error(error)
        this.$message.error('Error saving customer.')
      }
    },
    cancelForm() {
      this.$router.push({ name: 'CustomersList' })
    }
  }
}
</script>