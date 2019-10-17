<template>
  <div>
   <!-- <el-tree :data="elTree" node-key="uuid" @node-click="selectNode">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :class="data.style">{{ node.label }}</span>
      </span>
    </el-tree> -->
    <edit />
    <local-online :dialog-visible="viewLocalOnline" @close="closeViewLocalOnline()" @create="createProject"/>
    <where-look-language :dialog-visible="viewWhereLookLanguage" @close="closeViewWhereLookLanguage()" @change="updateProject"/>
    <language-select :dialog-visible="viewLanguageSelect" @close="closeViewLanguageSelect()"/>
    <folder-tree :dialog-visible="viewTreeFolder" @close="closeViewTreeFolder()"/>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import LocalOnline from './Modals/LocalOnline'
import LanguageSelect from './Modals/LanguageSelect'
import WhereLookLanguage from './Modals/WhereLookLanguage'
import Edit from './Edit'
import FolderTree from './Modals/local/FolderTree'

export default {
  name: 'home',
  components: { LocalOnline, LanguageSelect, WhereLookLanguage, Edit, FolderTree },
  data () {
    return {
      viewLocalOnline: true,
      viewLanguageSelect: false,
      viewWhereLookLanguage: false,
      viewTreeFolder: false,
      viewEdit: false
    }
  },
  mounted () {
    // this.init()
  },
  computed: {
    ...mapState({
      elTree: state => state.storeFile.elTree
    })
  },
  methods: {
    ...mapActions({
      init: 'storeFile/initTree',
      content: 'storeFile/contentFile',
      setProject: 'storeProject/setProject',
      setUpdateProject: 'storeProject/changeProject'
    }),
    createProject (name) {
      this.setProject(name)
      this.closeViewLocalOnline()
    },
    updateProject (project) {
      this.setUpdateProject([{ field: 'origin', content: project.typeName }, { field: 'recursive', content: project.recursive }])
      this.closeViewWhereLookLanguage()
    },
    closeViewLocalOnline () {
      this.viewLocalOnline = false
      this.viewTreeFolder = true
    },
    closeViewTreeFolder () {
      this.viewTreeFolder = false
      this.viewWhereLookLanguage = true
    },
    closeViewWhereLookLanguage () {
      this.viewWhereLookLanguage = false
      this.viewLanguageSelect = true
    },
    closeViewLanguageSelect () {
      this.viewLanguageSelect = false
    },
    selectNode (node, data, tree) {
      console.log(node)
      if (!node.path) {
        return
      }
      this.content({ path: node.path, name: node.label })
    }
  }
}
</script>
