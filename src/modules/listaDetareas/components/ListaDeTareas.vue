<template>
  <div class="task-list">
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{tarea}}
        <button @click="borraTarea">Borrar Tarea</button>


      </li>
    </ul>

  </div>
</template>

<script setup>
import {ref} from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');
const addTarea = () => {
  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = '';
}
const borraTarea = (index)=> {
  tareas.value.splice(index, 1);
}

</script>

<style scoped>
.task-list {
  font-family: Arial, sans-serif;
  max-width: 200px;

}

.h2 li {
  text-decoration: line-through;
  color: rgb(128, 128, 128);
}

input {
  margin-top: 10px;
  padding: 5px;
  width: calc(100% - 12px);
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
