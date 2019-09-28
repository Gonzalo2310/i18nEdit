<template>
  <div>
    <Modal
      v-if="ui ==='iview'"
      v-model="modalVisible"
      :mask-closable="closeMask"
      :title="title">
      <slot></slot>
      <div slot="footer">
      <slot name="footer"></slot>
      </div>
    </Modal>
    <el-dialog
      v-if="ui === 'element' "
      :title="title"
      :close-on-click-modal="closeMask"
      :visible.sync="modalVisible">
      <slot></slot>
      <span slot="footer" class="dialog-footer">
      <slot name="footer"></slot>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'InModal',
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      default: 'Sin titulo'
    },
    closeMask: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalVisible: {
      get () {
        return this.visible
      },
      set (value) {
        this.eventVue('close')
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
