<template>
  <div class="container mt-4">
    <h1 class="text-center">Carrito con Vuex</h1>
    <ProductoLista/>
    <Carrito/>
  </div>
</template>

<script>
import ProductoLista from '../components/ProductoLista.vue'
import Carrito from '../components/Carrito.vue'
export default { components:{ProductoLista,Carrito} }
</script>