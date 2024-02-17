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
input:focus {
  outline: none;
}
input {
  border-radius: 10px;
  width: 300px;
  height: 30px;
  text-align: center;
  font-size: 25px;
  font-style: bold;
  font-family: Arial, Helvetica, sans-serif;
  color:#0acef1;
}
button{
  color:white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 25px;
  cursor: pointer;
  margin-top: 15px;
  background: #bb7fe9;
  border-radius: 8px;
  height: 100%;
}

</style>
