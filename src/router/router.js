/* Principal archivo de configuracion de rutas de la pagina web */
/* debemos importar algunas funcionalidades */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/update",
    component: ()=>import ("../pages/EstudianteUpdate.vue"),
  },
  {
    path: "/save",
    component:  ()=>import ("../pages/EstudianteSave.vue"),
  },
  {
    path: "/delete",
    component: ()=>import ("../pages/EstudianteDelete.vue"),
  },
  {
    path: "/search/:id", //este es un parametro dinamico que se reemplazara por el valor real en tiempo de ejecucion
    component:  ()=>import ("../pages/EstudianteSearch.vue"),
  },
{
  path:"/:pathMatch(.*)*",
  component: ()=>import ("../pages/NoFoundPage.vue"),
}

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
}); //Creamos el historial para las url
export default router;