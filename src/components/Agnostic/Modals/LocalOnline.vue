<template>
  <el-dialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="80%">
    <span>{{$t('edit.title')}}</span>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="emit('confirm')">{{$t('buttons.confirm')}}</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'LocalOnline',
  props: {
    dialogVisible: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  methods: {
    emit (event, value = null) {
      if (value) {
        this.$emit(event, value)
      } else {
        this.$emit(event)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
