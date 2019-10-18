<template>
  <el-dialog :visible="dialogVisible" title="Seleccione la carpeta donde se deben buscar los archivos">
    <el-button type="success" icon="el-icon-back" @click="backPath()">Subir carpeta</el-button>
    <el-tree :data="tree" @node-click="handleNodeClick" />
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
  data () {
    return {
      currentNode: {}
    }
  },
  mounted () {
    this.getTree()
  },
  computed: {
    ...mapState({
      tree: state => state.storeLanguage.tree,
      path: state => state.storeLanguage.path
    })
  },
  methods: {
    ...mapActions({
      getTree: 'storeLanguage/treeInitial',
      changePath: 'storeLanguage/changePath'
    }),
    handleNodeClick (node) {
      this.currentNode = node
    },
    backPath () {
      let path = this.path
      if (path === '/') {
        console.log('raiz')
        return
      }
      let matrixFolder = path.split('/')
      if (matrixFolder.length === 0 || matrixFolder.length === 1) {
        this.changePath('/')
      }
      if (matrixFolder.length > 1) {
        matrixFolder.pop()
        this.changePath(matrixFolder.join('/'))
      }
      const me = this
      setTimeout(() => {
        me.getTree(me.path)
      }, 250)
    }
  }
}
</script>
