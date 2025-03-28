<template>
  <div class="registro-view">
    <h2>Formulario de registro</h2>
    <Form :validation-schema="validationSchema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre de usuario:</label>
        <Field type="text" name="nombre" id="nombre"/>
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">Correo electrónico:</label>
        <Field type="email" name="correo" id="correo"/>
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

const onSubmit = () =>{

  console.log('Se envio el furmulario');
}

</script>

<style scoped>
.form{

 margin-bottom: 10px;
}

</style>
