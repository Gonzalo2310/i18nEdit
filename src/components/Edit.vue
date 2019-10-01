<template>
  <div>
    <in-drawer :visible="open" title="Titulo" position="left">
      <label>Contenido</label>
      <in-button type="primary" text="Close / open" @click="open = !open"></in-button>
    </in-drawer>
    <in-button type="primary" text="Close / open" @click="open = !open"></in-button>
  </div>
</template>

<script>
import InDrawer from '../Library/Agnostic/Components/Navigation/InDrawer'
import InButton from '../Library/Agnostic/Components/button/InButton'
export default {
  name: 'Edit',
  components: { InDrawer, InButton },
  data () {
    return {
      open: false
    }
  }
}
</script>
