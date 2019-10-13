<template>
  <el-modal :visible="dialogVisible" title="Seleccione los Idiomas de trabajo">
    Con el checkbox indique que Idiomas piensa trabajar y el radio para elegir el idioma maestro
    <label>Buscador: </label>
    <el-input placeholder="Filtra los resultados" :value="inputSearch" @input="changeSearch()" />
    <div class="grid" v-for="option in options" :key="option.value">
      <el-checkbox :title="option.title" />
      <el-radio :options="[{title: '', value:option.value}]" />
    </div>
    <template slot="footer">
      <el-button type="primary" text="Aceptar el cambio" @click="eventVue('close')"/>
      <el-button type="danger" text="Cancelar" @click="eventVue('close')" />
    </template>
  </el-modal>
</template>

<script>
export default {
  name: 'LanguageSelect',
  props: {
    dialogVisible: {
      required: false,
      type: Boolean,
      default: false
    },
    languageList: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      inputSearch: ''
    }
  },
  computed: {
    options () {
      return [
        { title: 'Español', value: 1 },
        { title: 'Ingles', value: 2 },
        { title: 'Catalan', value: 3 }
      ]
    }
  },
  methods: {
    changeSearch (value) {
      this.inputSearch = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
