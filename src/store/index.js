import { createStore } from 'vuex'
export default createStore({
  state(){ return {
      productos:[
        {id:1,nombre:'Laptop',stock:3,precio:1000},
        {id:2,nombre:'Mouse',stock:5,precio:20}
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