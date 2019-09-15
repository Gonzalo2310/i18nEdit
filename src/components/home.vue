<template>
  <div>
    <el-tree :data="tree" node-key="uuid">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :class="data.style">{{ node.label }}</span>
      </span>
    </el-tree>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      tree: []
    }
  },
  mounted () {
    const me = this
    axios.get('/tree').then((response) => {
      me.tree = response.data.data
    })
  },
  computed: {
  },
  methods: {}
}
</script>
