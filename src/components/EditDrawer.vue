<template>
  <el-drawer :visible="open" title="Titulo" position="left">
    <label>Deberia ser un badge</label><el-input placeholder="Filtro" />
    <label>Contenido Tree</label>
    <el-divider></el-divider>
    <label>Lista de colores del tree</label>
    <el-divider></el-divider>
    <el-button type="primary" @click="closeEvent()">Close / Open</el-button>
  </el-drawer>
</template>

<script>
export default {
  name: 'EditDrawer',
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeEvent () {
      this.eventVue('close')
    }
  }
}
</script>
