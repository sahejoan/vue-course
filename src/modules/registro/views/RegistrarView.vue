<template>
  <div class="registro-view">
    <h2>Formulario de registro</h2>
    <Form :validation-schema="validationSchema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre de usuario:</label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="correo">Correo electrónico:</label>
        <Field v-model="correo" type="email" name="correo" id="correo" />
        <ErrorMessage name="correo"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>


  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage  } from 'vee-validate';
import validationSchema from '../schemas/validationSchema';
import { useRegistrarStore } from '../stores/registrarStore';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref('');
const correo = ref('');



const onSubmit = () =>{
    registrarStore.guardarRegistro(nombre.value, correo.value);

  console.log('Enviado');
}

</script>

<style scoped>
.form{

 margin-bottom: 10px;
}

</style>
