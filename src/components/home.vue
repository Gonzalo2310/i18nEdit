<template>
  <div>
    <el-tree :data="elTree" node-key="uuid" @node-click="selectNode">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :class="data.style">{{ node.label }}</span>
      </span>
    </el-tree>
    <local-online :dialog-visible="viewLocalOnline" @close="closeViewLocalOnline()"/>
    <language-select :dialog-visible="viewLanguageSelect" @close="closeViewLanguageSelect()"/>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import LocalOnline from './Modals/LocalOnline'
import LanguageSelect from './Modals/LanguageSelect'

export default {
  name: 'home',
  components: { LocalOnline, LanguageSelect },
  data () {
    return {
      viewLocalOnline: true,
      viewLanguageSelect: false
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
