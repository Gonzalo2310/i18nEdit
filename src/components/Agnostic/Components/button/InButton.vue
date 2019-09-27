<template>
  <div>
    <el-button :type="type" v-if="ui === 'element' ">{{text}}</el-button>
    <v-btn color="secondary" v-if="ui === 'vuetify'">pulsa</v-btn>
    <Button :type="type" v-if="ui ==='iview'">{{text}}</Button>
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
        return ['none', 'element', 'vuetify', 'iview'].indexOf(value) !== -1
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
      return this._ui === 'none' ? process.env.VUE_APP_UI : this._ui
    }
  }
}
</script>

<style scoped lang="scss">

</style>
