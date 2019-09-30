<template>
  <div>
    <el-checkbox v-model="isChecked" v-if="ui === 'element' "><span>{{title}}</span>
      <span><slot></slot></span>
    </el-checkbox>
    <Checkbox v-model="isChecked" v-if="ui ==='iview'"><span>{{title}}</span>
      <span><slot></slot></span>
    </Checkbox>

  </div>
</template>

<script>
export default {
  name: 'InCheckBox',
  props: {
    title: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    isChecked: {
      get () {
        return this.checked
      },
      set (value) {
        this.eventVue('change', value)
      }
    }
  }
}
</script>
