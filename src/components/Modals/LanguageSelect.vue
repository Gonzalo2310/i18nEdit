<template>
  <in-modal :visible="dialogVisible" title="Seleccione el origen de los idiomas">
    Indique en donde debería buscarse el listado de idiomas
    <in-radio :options="options" />
    <template slot="footer">
      <in-button type="primary" text="Aceptar el cambio" @click="eventVue('close')"/>
      <in-button type="danger" text="Cancelar" @click="eventVue('close')" />
    </template>
  </in-modal>
</template>

<script>
import InButton from '../../Library/Agnostic/Components/button/InButton'
import InModal from '../../Library/Agnostic/Components/modal/InModal'
import InRadio from '../../Library/Agnostic/Components/Form/InRadio'
export default {
  name: 'LanguageSelect',
  components: { InModal, InButton, InRadio },
  props: {
    dialogVisible: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: [
        { title: 'titulo1', value: 1 },
        { title: 'titulo2', value: 2 }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
