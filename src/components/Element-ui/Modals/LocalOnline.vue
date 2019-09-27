<template>
  <el-dialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="80%">
    <span>{{$t('edit.title')}}</span>
    <span slot="footer" class="dialog-footer">
    <!--<el-button type="primary" @click="emit('confirm')">{{$t('buttons.confirm')}}</el-button>-->
      <in-button type="primary" text="Pulsa" />
  </span>
  </el-dialog>
</template>

<script>
import InButton from '../../Agnostic/Components/button/InButton'
export default {
  name: 'LocalOnline',
  components: { InButton },
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
