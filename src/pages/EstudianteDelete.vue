<template>
  <h1>Delete Page</h1>
  <input type="text" v-model="id" id="id" placeholder="Insert ID Estudiante" />
  <button @click="delet">Delete</button>
</template>

<script>
import {deleteFacade } from "../helpers/clientEstudiante.js";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async delet() {
      await deleteFacade(this.id);
      console.log("Deleted! ");
    },
  },
};
</script>

<style>
button{
  
}
</style>
