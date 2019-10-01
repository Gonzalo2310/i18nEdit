<template>
  <div>
   <!-- <el-tree :data="elTree" node-key="uuid" @node-click="selectNode">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :class="data.style">{{ node.label }}</span>
      </span>
    </el-tree>-->
    <edit />
    <local-online :dialog-visible="viewLocalOnline" @close="closeViewLocalOnline()"/>
    <where-look-language :dialog-visible="viewWhereLookLanguage" @close="closeViewWhereLookLanguage()" />
    <language-select :dialog-visible="viewLanguageSelect" @close="closeViewLanguageSelect()"/>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import LocalOnline from './Modals/LocalOnline'
import LanguageSelect from './Modals/LanguageSelect'
import WhereLookLanguage from './Modals/WhereLookLanguage'
import Edit from './Edit'

export default {
  name: 'home',
  components: { LocalOnline, LanguageSelect, WhereLookLanguage, Edit },
  data () {
    return {
      viewLocalOnline: true,
      viewLanguageSelect: false,
      viewWhereLookLanguage: false,
      viewEdit: false
    }
  },
  mounted () {
    this.init()
    console.log(this.$i18n.locale)
  },
  computed: {
    ...mapState({
      tree: state => state.tree,
      elTree: state => state.elTree,
      files: state => state.files
    })
  },
  methods: {
    ...mapActions({
      init: 'initTree',
      content: 'contentFile',
      search: 'searchById'
    }),
    closeViewLocalOnline () {
      this.viewLocalOnline = false
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
