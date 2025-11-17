<template>
  <div class="row mt-4">
    <div class="col-6" v-for="p in productos" :key="p.id">
      <div class="card p-3">
        <h3>{{ p.nombre }}</h3>
        <p>Stock: {{ p.stock }}</p>
        <button class="btn btn-primary" @click="agregar(p.id)">Agregar</button>
        <p v-if="p.stock===0" class="text-danger">Sin stock!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed:{...mapState(['productos'])},
  methods:{
    ...mapMutations(['agregarCarrito']),
    agregar(id){ this.agregarCarrito(id) }
  }
}
</script>