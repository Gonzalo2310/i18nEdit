<template>
  <in-modal :visible="dialogVisible" title="Seleccione el origen de los idiomas">
    Indique en donde debería buscarse el listado de idiomas
    <in-radio :options="options" @change="optionChange"/>
    <in-check-box title="Busqueda Recursiva" @change="recursiveChange"/>
    <template slot="footer">
      <in-button type="primary" text="Aceptar el cambio" @click="changeValue()"/>
      <in-button type="danger" text="Cancelar" @click="eventVue('close')" />
    </template>
  </in-modal>
</template>

<script>
import InButton from '../../Library/Agnostic/Components/button/InButton'
import InModal from '../../Library/Agnostic/Components/modal/InModal'
import InRadio from '../../Library/Agnostic/Components/Form/InRadio'
import InCheckBox from '../../Library/Agnostic/Components/Form/InCheckBox'
export default {
  name: 'LanguageSelect',
  components: { InModal, InButton, InRadio, InCheckBox },
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
        { title: 'Nombre de carpetas', value: 1 },
        { title: 'Nombre de archivos', value: 2 },
        { title: 'Nombre de objetos dentro de los archivos', value: 3 }
      ],
      currentOption: 0,
      currentCheck: false
    }
  },
  methods: {
    optionChange (value) {
      this.currentOption = value
    },
    recursiveChange (value) {
      this.currentCheck = value
    },
    changeValue () {
      this.eventVue('change', { typeName: this.currentOption, recursive: this.currentCheck })
    }
  }
}
</script>
