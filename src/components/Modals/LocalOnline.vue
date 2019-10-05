<template>
  <in-modal :visible="dialogVisible" :title="$t('edit.title')">
    Seleccione una de las opciones para iniciar el trabajo de traducción.
    <h6>Si va a crear un proyecto nuevo ingrese el nombre que le desea asignar:</h6>
    <in-input placeholder="Nombre del nuevo proyecto" :value="projectName" @input="changeInput"/>
    <template slot="footer">
     <in-button type="primary" text="Crear proyecto" @click="createProject()"/>
     <in-button type="success" text="Abrir proyecto guardado" :enabled="false" />
     <in-button type="danger" text="Cerrar" @click="eventVue('close')" />
    </template>
  </in-modal>
</template>

<script>
import InButton from '../../Library/Agnostic/Components/button/InButton'
import InModal from '../../Library/Agnostic/Components/modal/InModal'
import InInput from '../../Library/Agnostic/Components/Form/InInput'

export default {
  name: 'LocalOnline',
  components: { InInput, InButton, InModal },
  props: {
    dialogVisible: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      projectName: ''
    }
  },
  methods: {
    changeInput (value) {
      this.projectName = value
    },
    createProject () {
      this.eventVue('create', this.projectName)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
