<template>
  <div>
    <el-drawer
      v-if="ui === 'element' "
      :title="title"
      :visible.sync="statusVisible"
      :direction="getPosition">
      <slot></slot>
    </el-drawer>
    <Drawer :title="title" v-model="statusVisible" v-if="ui ==='iview'" :placement="getPosition">
      <slot></slot>
    </Drawer>
  </div>
</template>

<script>
export default {
  name: 'InDrawer',
  props: {
    position: {
      type: String,
      required: false,
      default: 'left'
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    getPosition () {
      if (this.ui === 'element') {
        return this.convertToElementPosition()
      }
      if (this.ui === 'iview') {
        if (['left', 'right'].includes(this.position)) {
          return this.position
        }
        return 'left'
      }
      return 'left'
    },
    statusVisible: {
      get () {
        return this.visible
      },
      set (value) {
        this.eventVue('change', value)
      }
    }
  },
  methods: {
    convertToElementPosition () {
      switch (this.position) {
        case 'left':
          return 'ltr'
        case 'right':
          return 'rtl'
        case 'top':
          return 'ttb'
        case 'bottom':
          return 'btt'
        default:
          return 'ltr'
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
