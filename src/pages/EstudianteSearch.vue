<template>
  <h1>Search Page</h1>
 
  <input type="text" v-model="id" id="id" placeholder="Insert ID Estudiante" />
  <button @click="searchForId">Search</button>
  <div class="container">
  <div v-if="find == true" class="tabla">
    <label for="">NAME</label>
    <p>{{ name }}</p>
    <label for="">LASTNAME</label>
    <p>{{ lastName }}</p>
    <label for="">GENDER</label>
    <p>{{ gender }}</p>
    <label for="">BIRTHDATE</label>
    <p>{{ birthdate }}</p>
    <label for="">EMAIL</label>
    <p>{{ email }}</p>
    <label for="">PHONENUMBER</label>
    <p>{{ phoneNumber }}</p>
    <label for="">ADDRESS</label>
    <p>{{ address }}</p>
    <label for="">SCHOOL</label>
    <p>{{ school }}</p>
    <label for="">PROGRAM</label>
    <p>{{ program }}</p>
  </div>
  </div>
</template>

<script>
 import {searchEstudianteFacade } from "../helpers/clientEstudiante.js";
export default {
  data() {
    return {
      id: null,
      name: null,
      lastName: null,
      gender: null,
      birthdate: null,
      email: null,
      phoneNumber: null,
      address: null,
      school: null,
      program: null,
      //For visual effect
      find: false,
    };
  },
  methods: {
    async searchForId() {
      const data = await searchEstudianteFacade(this.id);
      console.log("From component Estudiante...");
      console.log(data);
      this.name = data.name;
      this.lastName = data.lastName;
      this.gender = data.gender;
      this.birthdate = data.birthdate;
      this.email = data.email;
      this.phoneNumber = data.phoneNumber;
      this.address = data.address;
      this.school = data.school;
      this.program = data.program;
      this.find = true;
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
.tabla {
  display: grid;
  grid-template-rows: repeat(18, 50px);
  width: 300px;
  height: 100%;
/*   grid-gap:1px; */
margin-top: 15px;
margin-bottom:30px;
  align-items: center;
}

label {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: oblique;
  font-size: 20px;
  background: #7fd9e9;
  border-radius: 15px;
  height: 40px;
  line-height: 40px;
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
p {
  font-size: 25px;
  font-style: bold; 
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 15px;
  /* background: #9055d8; */
  height: 40px;
  line-height: 40px;
  box-sizing: content-box;
  color:#9055d8;
  
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
</style>
