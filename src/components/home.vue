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

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'home',
  mounted () {
    this.init()
  },
  computed: {
    ...mapState({
      tree: state => state.tree,
      elTree: state => state.elTree
    }),
    ...mapGetters({
      search: 'searchById'
    })
  },
  methods: {
    ...mapActions({
      init: 'initTree',
      content: 'contentFile'
    }),
    selectNode (node, data, tree) {
      console.log(this.search(node.uuid))
    }
  }
}
</script>
