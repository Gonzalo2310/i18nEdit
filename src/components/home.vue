<template>
  <div>
    <el-tree :data="elTree" node-key="uuid" @node-click="selectNode">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :class="data.style">{{ node.label }}</span>
      </span>
    </el-tree>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  mounted () {
    this.init()
  },
  computed: {
    ...mapState({
      tree: state => state.tree,
      elTree: state => state.elTree
    })
  },
  methods: {
    ...mapActions({
      init: 'initTree',
      content: 'contentFile',
      search: 'searchById'
    }),
    selectNode (node, data, tree) {
      console.log(this.content(node.path))
    }
  }
}
</script>
