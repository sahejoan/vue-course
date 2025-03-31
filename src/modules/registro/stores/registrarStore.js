import { defineStore } from "pinia";
//import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar', {

  state: () => ({
    registros: []
  }),
  actions: {
    guardarRegistro(nombreFormulario, correoFormulario) {
      this.registros.push({ nombreFormulario, correoFormulario });
      console.log('Registro guardado:', { correoFormulario, nombreFormulario });
    }
  }
});



// import { ref } from "vue";

// export const useRegistrarStore = defineStore('registrar',() =>{

//   const nombre = ref('');
//   const correo = ref('');
//   const guardarRegistro = (nombreFormulario, correoFormulario) =>{
//        nombre.value = nombreFormulario;
//        correo.value = correoFormulario;

//   }
//   return (nombre, correo, guardarRegistro)
// });









