<template>
  <div class="app-container">
    <el-card>
      <h2>{{ isEdit ? 'Edit Part' : 'Create Part' }}</h2>

      <el-form :model="formData" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>

        <el-form-item label="Type">
          <el-select v-model="formData.type">
            <el-option label="Pad" value="Pad" />
            <el-option label="Mouthpiece" value="Mouthpiece" />
            <el-option label="Plating" value="Plating" />
            <!-- etc. -->
          </el-select>
        </el-form-item>

        <el-form-item label="Quantity">
          <el-input v-model="formData.quantity" type="number"></el-input>
        </el-form-item>

        <el-form-item label="Price">
          <el-input v-model="formData.price" type="number"></el-input>
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
import { fetchPartById, createPart, updatePart } from '@/api/inventory'

export default {
  name: 'InventoryCreateEdit',
  data() {
    return {
      formData: {
        name: '',
        type: '',
        quantity: 0,
        price: 0
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
      this.loadPart(this.$route.params.id)
    }
  },
  methods: {
    async loadPart(id) {
      try {
        const response = await fetchPartById(id)
        this.formData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async submitForm() {
      try {
        if (this.isEdit) {
          await updatePart(this.$route.params.id, this.formData)
        } else {
          await createPart(this.formData)
        }
        this.$message.success('Part saved!')
        this.$router.push({ name: 'InventoryList' })
      } catch (error) {
        console.error(error)
        this.$message.error('Error saving part.')
      }
    },
    cancelForm() {
      this.$router.push({ name: 'InventoryList' })
    }
  }
}
</script>