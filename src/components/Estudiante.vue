<template>
  <h1>Estudiante Component</h1>
  <input type="text" v-model="id" />
  <button @click="searchForId">Search</button>
  <input type="text" v-model="name" />
  <input type="text" v-model="lastName" />
  <button @click="save">Save</button>
</template>

<script>
import { searchEstudianteFacade } from "../helpers/clientEstudiante.js";
import { saveFacade } from "../helpers/clientEstudiante.js";
export default {
  data() {
    return {
      id: null,
      name: null,
      lastName:null,
    };
  },
  methods: {
    async searchForId() {
      const data = await searchEstudianteFacade(this.id);
      console.log("From component Estudiante...");
      console.log(data);
      this.name = data.name;
    },
    async save() {
      const estuBody = {
        name: "Wilson",
        lastName: this.lastName,
        gender: "M",
        birthdate: "1980-10-05T00:00:00",
        email: "will@b.com",
        phoneNumber: null,
        address: null,
        school: "FACSO",
        program: "Comunicación Social",
      };
      await saveFacade(estuBody);
    },
  },
};
</script>

<style></style>
