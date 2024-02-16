<template>
  <div class="container">
    <h1>Estudiante Component</h1>
    <input type="text" v-model="id" placeholder="Ingrese el id del estudiante"/>
    <button @click="searchForId">Search</button>

    <button @click="insertForm = !insertForm">Insert</button>
    <button @click="update">Update</button>
    <button @click="delet">Delete</button>
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
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script>
import { searchEstudianteFacade, saveFacade,updateFacade, deleteFacade } from "../helpers/clientEstudiante.js";

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
    async save() {
      const estuBody = {
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
      console.log("Save Estudiante!")
      await saveFacade(estuBody);
    },
    async update(){
      const body ={
        name:"Hola",
        lastName:this.lastName,
        gender:"M",
        birthdate:this.birthdate,

      };
      await updateFacade(this.id,body);
    },
    async delet(){
        await deleteFacade(this.id);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
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
.formTable {
  display: grid;
  grid-template-rows: repeat(18, 50px);
  width: 300px;
  height: 100%;
/*   grid-gap:1px; */
margin-bottom: 30px;
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
</style>
