<template>
  <EstudiantePageVue />
</template>

<script>
import EstudiantePageVue from "./pages/EstudiantePage.vue";
import Estudiante from "./components/Estudiante.vue";

export default {
  name: "App",
  components: {
    EstudiantePageVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
