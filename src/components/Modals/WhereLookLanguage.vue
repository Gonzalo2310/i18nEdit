<template>
  <el-modal :visible="dialogVisible" title="Seleccione el origen de los idiomas">
    Indique en donde debería buscarse el listado de idiomas
    <el-radio :options="options" @change="optionChange"/>
    <el-checkbox title="Busqueda Recursiva" @change="recursiveChange"/>
    <template slot="footer">
      <el-button type="primary" text="Aceptar el cambio" @click="changeValue()"/>
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
