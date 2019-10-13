<template>
  <el-dialog :visible="dialogVisible" title="Seleccione el origen de los idiomas">
    Indique en donde debería buscarse el listado de idiomas
    <el-radio-group v-model="currentOption">
      <el-radio v-for="option in options" :key="option.value" :label="option.value" >{{option.title}}</el-radio>
    </el-radio-group>
    <el-checkbox v-model="currentCheck">Búsqueda recursiva</el-checkbox>
    <template slot="footer">
      <el-button type="primary" @click="changeValue()">Aceptar el cambio</el-button>
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
    changeValue () {
      this.eventVue('change', { typeName: this.currentOption, recursive: this.currentCheck })
    }
  }
}
</script>
