<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
    <li><router-link to="/Contador">Contador</router-link></li>
     <li><router-link to="/ListaDeTareas">Tareas</router-link></li>
     <li><router-link to="/Registrar">Registro</router-link></li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #c3bed1;
  padding: 20px;
  border-right: 1px solid #d3cdcd;
}

.sidebar h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  text-decoration: none;
  color: #1b0303;
}

.sidebar a:hover {
  text-decoration: underline;
}
</style>
