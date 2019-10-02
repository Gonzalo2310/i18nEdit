<template>
  <in-drawer :visible="open" title="Titulo" position="left">
    <label>Deberia ser un badge</label><in-input placeholder="Filtro" />
    <label>Contenido Tree</label>
    <hr />
    <label>Lista de colores del tree</label>
    <hr />
    <in-button type="primary" text="Close / open" @click="closeEvent()"></in-button>
  </in-drawer>
</template>

<script>
import InDrawer from '../Library/Agnostic/Components/Navigation/InDrawer'
import InButton from '../Library/Agnostic/Components/button/InButton'
import InInput from '../Library/Agnostic/Components/Form/InInput'
export default {
  name: 'EditDrawer',
  components: { InButton, InDrawer, InInput },
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeEvent () {
      this.eventVue('close')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
