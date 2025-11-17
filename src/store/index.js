import { createStore } from 'vuex'
export default createStore({
  state(){ return {
      productos:[
        {id:1,nombre:'Audífono',stock:3,precio:30.000},
        {id:2,nombre:'Mouse',stock:5,precio:20.000},
        {id:3,nombre:'Teclado',stock:10,precio:15.000},
        {id:4,nombre:'Gabinete',stock:4,precio:35.000},
        {id:5,nombre:'Pantalla',stock:3,precio:175.000},
        {id:6,nombre:'Silla',stock:2,precio:150.000}
      ],
      carrito:[]
  }},
  mutations:{
    agregarCarrito(state,id){
      const p=state.productos.find(x=>x.id===id)
      if(!p||p.stock===0) return
      p.stock--
      const item=state.carrito.find(x=>x.id===id)
      if(item) item.cantidad++
      else state.carrito.push({id,nombre:p.nombre,cantidad:1})
    }
  }
})