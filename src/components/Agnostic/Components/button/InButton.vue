<template>
  <div>
    <el-button :type="type" v-if="ui === 'element' ">{{text}}</el-button>
    <v-btn color="secondary" >pulsa</v-btn>
    {{ui}} / {{type}}
  </div>
</template>

<script>
export default {
  name: 'InButton',
  props: {
    type: {
      type: String,
      required: false,
      default: 'none',
      validation: function (value) {
        return ['none', 'success', 'warning', 'danger', 'primary'].indexOf(value) !== -1
      }
    },
    _ui: {
      type: String,
      required: false,
      default: 'none',
      validation: function (value) {
        return ['none', 'element', 'vuetify'].indexOf(value) !== -1
      }
    },
    text: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    ui () {
      return this._ui === 'none' ? process.env.APP_UI : this._ui
    }
  }
}
</script>

<style scoped lang="scss">

</style>
