<template>
  <el-dialog :visible="dialogVisible" :title="$t('edit.title')">
    Seleccione una de las opciones para iniciar el trabajo de traducción.
    <h4>Si va a crear un proyecto nuevo ingrese el nombre que le desea asignar:</h4>
    <el-input placeholder="Nombre del nuevo proyecto" :value="projectName" @input="changeInput"/>
    <template slot="footer">
      <el-button type="primary" @click="createProject()">Crear proyecto</el-button>
      <el-button type="success" :enabled="false" >Abrir Proyecto guardado</el-button>
      <el-button type="danger" @click="eventVue('close')" >Cerrar</el-button>
    </template>
  </el-dialog>
</template>

<script>

export default {
  name: 'LocalOnline',
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
