<template>
  <div>
    <Input v-model="isValue" :placeholder="placeholder" v-if="ui ==='iview'" :readonly="readOnly"/>
    <el-input :placeholder="placeholder" v-model="isValue" v-if="ui === 'element' " :readonly="readOnly"></el-input>
  </div>
</template>

<script>
export default {
  name: 'InInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'PlaceHolder'
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    isValue: {
      get () {
        return this.value
      },
      set (value) {
        this.eventVue('input', value)
      }
    }
  }
}
</script>
