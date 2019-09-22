<template>
  <el-dialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="80%">
    <span>This is a message</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
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
  }
}
</script>

<style scoped lang="scss">

</style>
