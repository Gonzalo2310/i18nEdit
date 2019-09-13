<template>
  <div>
    <el-tree :data="tree"></el-tree>
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
