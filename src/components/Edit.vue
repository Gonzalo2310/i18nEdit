<template>
  <div>
    <edit-drawer :open="open" @close="open = false" />
    <h3>Trabajo de traduccion</h3>
    <div>
    <label>Idioma basico</label> / <label>Idioma elegido</label>
    </div>
    <div>
      <el-input :read-only="true" placeholder="contenido del texto del lenguaje de guia" />
    </div>
    <label>Sugerencias</label>
    <ul>
      <li>Google</li>
      <li>Bind</li>
      <li>yahoo</li>
      <li>Deepl</li>
    </ul>
    <hr />
    <h4>Trabajo</h4>
    <div>
      <label>Texto actual</label>
    </div>
    <div>
      <el-input placeholder="Texto a modificar"  />
    </div>
    <hr />
    <div>
      <label>Sintais</label>
      <ul>
        <li>Variable:</li>
        <li>No debe traducirse</li>
      </ul>
    </div>
    <hr />
    <el-button type="primary" @click="open = !open">Close / Open</el-button>
  </div>
</template>

<script>

import EditDrawer from './EditDrawer'
export default {
  name: 'Edit',
  components: { EditDrawer },
  data () {
    return {
      open: false
    }
  }
}
</script>
