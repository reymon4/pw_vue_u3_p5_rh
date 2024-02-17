<template>
   <h1>UNIVERSIDAD CENTRAL DEL ECUADOR</h1>
   <NavBar/>
   <router-view />
  
</template>

<script>
import EstudiantePageVue from "./pages/EstudiantePage.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    EstudiantePageVue,
    NavBar
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
h1{
  color:rgb(97, 23, 175);
}
</style>
