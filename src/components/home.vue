<template>
  <div>
{{tree}}
  </div>
</template>

<script>
// import messages from '../../../i18n/editor'
// import nodeTree from '../utils/recursive'
import axios from 'axios'
// import { mapActions, mapState } from 'vuex'

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
      console.log(response)
      me.tree = response.data.data[0]
    })
  },
  computed: {
  },
  methods: {}
}
</script>
