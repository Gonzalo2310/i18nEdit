<template>
  <span>
    <el-button :type="processType" v-if="ui === 'element' " @click="eventVue('click')" :disabled="!enabled">{{text}}</el-button>
    <Button :type="processType" v-if="ui ==='iview'" @click="eventVue('click')" :disabled="!enabled">{{text}}</Button>
  </span>
</template>

<script>
export default {
  name: 'InButton',
  props: {
    type: {
      type: String,
      required: false,
      default: '',
      validation: function (value) {
        console.log('value: ', value)
        return ['none', 'success', 'warning', 'danger', 'primary', 'error', 'secondary'].includes(value)
      }
    },
    text: {
      type: String,
      required: false,
      default: null
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    processType () {
      const type = this.type
      if (!type) {
        return ''
      }
      switch (this.ui) {
        case 'element':
          if (type === 'error') {
            return 'danger'
          }
          return type
        case 'iview':
          if (type === 'danger') {
            return 'error'
          }
          return type
      }
      return type // Linea de retorno si fallara el switch. Obligatorio para una propiedad computada
    }
  }
}
</script>
