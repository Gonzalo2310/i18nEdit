<template>
  <div>
    <el-tree :data="elTree" node-key="uuid" @node-click="selectNode">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :class="data.style">{{ node.label }}</span>
      </span>
    </el-tree>
    <local-online :dialog-visible="viewLocalOnline" @confirm="viewLocalOnline = false"/>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import LocalOnline from './Element-ui/Modals/LocalOnline'

export default {
  name: 'home',
  components: { LocalOnline },
  data () {
    return {
      viewLocalOnline: true
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
