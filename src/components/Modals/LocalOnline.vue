<template>
  <in-modal :visible="dialogVisible" :title="$t('edit.title')">
    Seleccione una de las opciones para iniciar el trabajo de traducción.
    <template slot="footer">
     <in-button type="primary" text="Abrir Local" @click="eventVue('close')"/>
     <in-button type="success" text="Abrir proyecto guardado" :enabled="false" />
     <in-button type="danger" text="Cerrar" @click="eventVue('close')" />
    </template>
  </in-modal>
</template>

<script>
import InButton from '../../Library/Agnostic/Components/button/InButton'
import InModal from '../../Library/Agnostic/Components/modal/InModal'
export default {
  name: 'LocalOnline',
  components: { InButton, InModal },
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
