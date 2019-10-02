<template>
  <div>
    <edit-drawer :open="open" @close="open = false" />
    <h3>Trabajo de traduccion</h3>
    <div>
    <label>Idioma basico</label> / <label>Idioma elegido</label>
    </div>
    <div>
      <in-input :read-only="true" placeholder="contenido del texto del lenguaje de guia" />
    </div>
    <label>Sugerencias</label>
    <ul> <!-- listados de los UI's talvez? -->
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
      <in-input placeholder="Texto a modificar"  />
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
    <in-button type="primary" text="Close / open" @click="open = !open"></in-button>
  </div>
</template>

<script>
import InButton from '../Library/Agnostic/Components/button/InButton'
import EditDrawer from './EditDrawer'
import InInput from '../Library/Agnostic/Components/Form/InInput'
export default {
  name: 'Edit',
  components: { InInput, EditDrawer, InButton },
  data () {
    return {
      open: false
    }
  }
}
</script>
