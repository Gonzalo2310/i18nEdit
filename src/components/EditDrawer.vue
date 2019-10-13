<template>
  <el-drawer :visible="open" title="Titulo" position="left">
    <label>Deberia ser un badge</label><el-input placeholder="Filtro" />
    <label>Contenido Tree</label>
    <hr />
    <label>Lista de colores del tree</label>
    <hr />
    <el-button type="primary" text="Close / open" @click="closeEvent()"></el-button>
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
