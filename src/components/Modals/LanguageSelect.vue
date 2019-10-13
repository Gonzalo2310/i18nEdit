<template>
  <el-dialog :visible="dialogVisible" title="Seleccione los Idiomas de trabajo">
    Con el checkbox indique que Idiomas piensa trabajar y el radio para elegir el idioma maestro
    <label>Buscador: </label>
    <el-input placeholder="Filtra los resultados" v-model="inputSearch" />
    <div class="grid" v-for="option in options" :key="option.value">
      <el-checkbox v-model="option.check">{{option.title}}</el-checkbox>
      <el-radio v-model="languageMaster" :label="option.value">&nbsp;</el-radio>
    </div>
    <template slot="footer">
      <el-button type="primary" @click="eventVue('close')">Aceptar el cambio</el-button>
      <el-button type="danger" @click="eventVue('close')" >Cancelar</el-button>
    </template>
  </el-dialog>
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
      inputSearch: '',
      languageMaster: 1,
      options: [
        { title: 'Español', value: 1, check: false },
        { title: 'Ingles', value: 2, check: false },
        { title: 'Catalan', value: 3, check: false }
      ]
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
