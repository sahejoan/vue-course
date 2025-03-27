<template>
   <div>

      <p v-if="contador <= 0" style="color: red">Numero Negativo:</p>
      <p v-else style="color: blue">Numero Positivo:</p>
      <p> {{ contador }}</p>

    <button @click="incrementar">Incremento</button>
    <button @click="decrementar">Decremento</button>
   </div>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);

const incrementar =() =>{
  contador.value++;
}
const  decrementar =() =>{
    if (contador.value > 0) {
      contador.value--;

    }
  }

</script>

<style scoped>
 ive {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
