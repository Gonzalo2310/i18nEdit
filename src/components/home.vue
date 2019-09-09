<template>
  <div>
    <div class="text-center">
      <h2>Lenguajes detectados</h2>
    </div>
    <div class="three-in-one">
      <div class="text-center" v-for="language in currentsLanguages" :key="language.iso">
        <el-checkbox v-model="language.active">{{language.language}}</el-checkbox>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="demo-input-suffix space-20">
      <span class="demo-input-label">Filtro: </span>
      <el-input v-model="filterValue"></el-input>
      <el-button type="primary" @click="actionFilter(filterValue)">Filtrar</el-button>
    </div>
    <el-tree :data="dataTree" :props="treeDefaultProps" node-key="nodeKey" ref="treeGeneral"
             :filter-node-method="filter">
    <span class="custom-tree-node" slot-scope="{ node, data}">
        <span v-if="data.children">{{ node.label }}</span>
      <span v-else @click="editar(data)">{{node.label}} : {{data.labelValue}}</span>
    </span>
    </el-tree>
    <el-dialog
      title="Edicion"
      :visible.sync="dialogVisible"
      width="80%">
      <div v-for="tmpContent in dialogContent" :key="tmpContent.iso" class="demo-input-suffix space-20">
        <span class="demo-input-label"><b>{{tmpContent.iso}}</b> : {{tmpContent.node.data.label}} </span>
        <el-input v-model="tmpContent.node.data.labelValue"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="danger" @click="cerrar()">Cancelar</el-button>
    <el-button type="success" @click="cambiar()">Cambiar</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
// import messages from '../../../i18n/editor'
import nodeTree from '../utils/recursive'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      // messages,
      languages: [],
      currentsLanguages: [],
      currentsISO: [],
      treeDefaultProps: {
        children: 'children',
        label: 'label'
      },
      dialogVisible: false,
      dialogContent: [],
      filterValue: ''
    }
  },
  mounted () {
    let me = this
    this.updateMessage().then(() => {
      me.detectLanguage()
    })
    this.languages['es'] = 'Español'
    this.languages['ca'] = 'Catalan'
    this.languages['en'] = 'Ingles'
  },
  computed: {
    ...mapState({
      url: state => state.url,
      messages: state => state.messages
    }),
    dataTree () {
      let result = nodeTree(this.messages)
      let resultUpdate = []
      this.currentsLanguages.forEach(item => {
        if (item.active) {
          result.forEach(element => {
            if (element.label === item.iso) {
              resultUpdate.push(element)
            }
          })
        }
      })
      return resultUpdate
    }
  },
  methods: {
    ...mapActions({
      setUrl: 'updateUrl',
      updateMessage: 'renoveImport'
    }),
    editar (value) {
      const me = this
      this.dialogVisible = true
      this.dialogContent = []
      let temporalNodeKey = value.nodeKey.substring(3)
      this.currentsISO.forEach(item => {
        me.dialogContent.push({
          node: this.$refs.treeGeneral.getNode(item + '.' + temporalNodeKey),
          iso: item
        })
      })
    },
    actionFilter (value) {
      this.$refs.treeGeneral.filter(value)
    },
    detectLanguage () {
      this.currentsISO = Object.keys(this.messages)
      if (this.currentsISO) {
        this.currentsISO.forEach(item => {
          this.currentsLanguages.push({
            language: this.languages[item],
            iso: item,
            active: true
          })
        })
      }
    },
    cerrar () {
      this.dialogVisible = false
      this.dialogContent = []
    },
    cambiar () {
      this.dialogVisible = false
      let send = []
      this.dialogContent.forEach(item => {
        send.push({
          label: item.node.data.labelValue,
          path: item.node.data.nodeKey
        })
      })
      let me = this
      axios.post('http://localhost:3000/update', { data: { foo: send } })
        .then(() => {
          me.updateMessage()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    filter (value, data, node) {
      let returnLabel = node.data.nodeKey.includes(value)
      let returnLabelValue = false
      if (node.data.labelValue) {
        returnLabelValue = node.data.labelValue.includes(value)
      }
      return returnLabel || returnLabelValue
    }
  }
}
</script>
