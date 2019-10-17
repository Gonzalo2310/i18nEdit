<template>
  <el-dialog :visible="dialogVisible" title="Seleccione la carpeta donde se deben buscar los archivos">
    <el-tree :data="tree" />
    <template slot="footer">
      <el-button type="success" size="small">Seleccionar</el-button>
      <el-button type="danger" size="small" @click="$emit('close')" >Cancelar</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'FolderTree',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  mounted () {
    this.getTree()
  },
  computed: {
    ...mapState({
      tree: state => state.storeLanguage.tree
    })
  },
  methods: {
    ...mapActions({
      getTree: 'storeLanguage/treeInitial'
    })
  }
}
</script>
