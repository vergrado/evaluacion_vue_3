<template>
  <div class="mt-4">
    <h2>Carrito</h2>
    <div v-for="c in carrito" :key="c.id">
      <strong>{{ c.nombre }}</strong> (x{{ c.cantidad }})
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default { computed:{...mapState(['carrito'])} }
</script>