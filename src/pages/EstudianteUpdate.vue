<template>
    <h1 >Update Page</h1>
    <input type="text" v-model="id" id="id" placeholder="Insert ID to update"/>
    <button @click="searchForId">Search</button>
    <div class="container">
    <div v-if="insertForm == true" class="formTable">
      <label for="">NAME</label>
      <input type="text" v-model="name" />
      <label for="">LASTNAME</label>
      <input type="text" v-model="lastName" />
      <label for="">GENDER</label>
      <input type="text" v-model="gender" />
      <label for="">BIRTHDATE</label>
      <input type="datetime-local" v-model="birthdate" />
      <label for="">EMAIL</label>
      <input type="text" v-model="email" />
      <label for="">PHONENUMBER</label>
      <input type="text" v-model="phoneNumber" />
      <label for="">ADDRESS</label>
      <input type="text" v-model="address" />
      <label for="">SCHOOL</label>
      <input type="text" v-model="school" />
      <label for="">PROGRAM</label>
      <input type="text" v-model="program" />
      <button @click="update">Update</button>
    </div>
  </div>
  </template>
  
  <script>
   import {updateFacade,searchEstudianteFacade } from "../helpers/clientEstudiante.js";
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
      insertForm: false,
    };
  },
  methods: {
    async update(){
      const body ={
        name: this.name,
        lastName: this.lastName,
        gender: this.gender,
        birthdate: this.birthdate,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
        school: this.school,
        program: this.program,

      };
     
      await updateFacade(this.id,body);
      console.log("Updated!");
    },
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
      
      this.insertForm=true;
    },
  },
  
  }
  </script>
  
  <style>
  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
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
input:focus {
  outline: none;
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

  </style>