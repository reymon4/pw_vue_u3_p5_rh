/* Principal archivo de configuracion de rutas de la pagina web */
/* debemos importar algunas funcionalidades */
import { createRouter, createWebHashHistory } from "vue-router";
import EstudianteSave from "../pages/EstudianteSave.vue"
import EstudianteSearch from "../pages/EstudianteSearch.vue"
import EstudianteDelete from "../pages/EstudianteDelete.vue"
import EstudianteUpdate from "../pages/EstudianteUpdate"

const routes = [
  {
    path: "/update",
    component: EstudianteUpdate,
  },
  {
    path: "/save",
    component: EstudianteSave,
  },
  {
    path: "/delete",
    component: EstudianteDelete,
  },
  {
    path: "/search",
    component: EstudianteSearch,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
}); //Creamos el historial para las url
export default router;