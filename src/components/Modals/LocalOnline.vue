<template>
  <el-modal :visible="dialogVisible" :title="$t('edit.title')">
    Seleccione una de las opciones para iniciar el trabajo de traducción.
    <h6>Si va a crear un proyecto nuevo ingrese el nombre que le desea asignar:</h6>
    <el-input placeholder="Nombre del nuevo proyecto" :value="projectName" @input="changeInput"/>
    <template slot="footer">
     <el-button type="primary" text="Crear proyecto" @click="createProject()"/>
     <el-button type="success" text="Abrir proyecto guardado" :enabled="false" />
     <el-button type="danger" text="Cerrar" @click="eventVue('close')" />
    </template>
  </el-modal>
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

<style scoped lang="scss">

</style>
