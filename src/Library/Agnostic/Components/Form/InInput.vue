<template>
  <div>
    <Input v-model="isValue" :placeholder="placeholder" v-if="ui ==='iview'"/>
    <el-input :placeholder="placeholder" v-model="isValue" v-if="ui === 'element' "></el-input>
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
