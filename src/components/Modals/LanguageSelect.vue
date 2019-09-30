<template>
  <in-modal :visible="dialogVisible" title="Seleccione los Idiomas de trabajo">
    Con el checkbox indique que Idiomas piensa trabajar y el radio para elegir el idioma maestro
    <label>Buscador: </label>
    <in-input placeholder="Filtra los resultados" :value="inputSearch" @input="changeSearch()" />
    <in-check-box :title="option.title" v-for="option in options" :key="option.value">
      <in-radio :options="[{title: '', value:option.value}]" />
    </in-check-box>
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
import InCheckBox from '../../Library/Agnostic/Components/Form/InCheckBox'
import InInput from '../../Library/Agnostic/Components/Form/InInput'
export default {
  name: 'LanguageSelect',
  components: { InModal, InButton, InRadio, InCheckBox, InInput },
  props: {
    dialogVisible: {
      required: false,
      type: Boolean,
      default: false
    },
    languageList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      options: [
        { title: 'Español', value: 1 },
        { title: 'Ingles', value: 2 },
        { title: 'Catalan', value: 3 }
      ],
      inputSearch: ''
    }
  },
  methods: {
    changeSearch (value) {
      this.inputSearch = value
    }
  }
}
</script>
