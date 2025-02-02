<template>
  <div class="app-container">
    <el-card>
      <div style="margin-bottom: 16px;">
        <el-button type="primary" @click="goCreate">Add Instrument</el-button>
      </div>

      <el-table :data="instruments" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="maker" label="Maker" />
        <el-table-column prop="model" label="Model" />
        <el-table-column prop="serialNumber" label="Serial Number" />
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
import { fetchInstruments } from '@/api/instruments'

export default {
  name: 'InstrumentsList',
  data() {
    return {
      instruments: []
    }
  },
  created() {
    this.loadInstruments()
  },
  methods: {
    async loadInstruments() {
      try {
        const response = await fetchInstruments()
        this.instruments = response.data || []
      } catch (error) {
        console.error(error)
      }
    },
    goCreate() {
      this.$router.push({ name: 'CreateInstrument' })
    },
    goEdit(id) {
      this.$router.push({ name: 'EditInstrument', params: { id } })
    }
  }
}
</script><template>
  <div class="app-container">
    <el-card>
      <div style="margin-bottom: 16px;">
        <el-button type="primary" @click="goCreate">Add Instrument</el-button>
      </div>

      <el-table :data="instruments" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="maker" label="Maker" />
        <el-table-column prop="model" label="Model" />
        <el-table-column prop="serialNumber" label="Serial Number" />
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
import { fetchInstruments } from '@/api/instruments'

export default {
  name: 'InstrumentsList',
  data() {
    return {
      instruments: []
    }
  },
  created() {
    this.loadInstruments()
  },
  methods: {
    async loadInstruments() {
      try {
        const response = await fetchInstruments()
        this.instruments = response.data || []
      } catch (error) {
        console.error(error)
      }
    },
    goCreate() {
      this.$router.push({ name: 'CreateInstrument' })
    },
    goEdit(id) {
      this.$router.push({ name: 'EditInstrument', params: { id } })
    }
  }
}
</script>