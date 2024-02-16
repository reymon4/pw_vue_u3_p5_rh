/* Se crea cada cliente por servicio */
import axios from "axios";

//logica
const searchEstudiante = async (id) => {
  //Implicitamente ya esta el await (delante de axios.get)
  const data = axios
    .get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};
const save = async (body) => {
  const data = axios
    .post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, body)
    .then((r) => r.data);
  console.log(data);
};
const update = async (id, body) => {
  const data = axios
    .put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, body)
    .then((r) => r.data);
  console.log(data);
};
const delet = async (id) => {
  const data = axios
    .delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`)
    .then((r) => r.data);
  console.log(data);
};

//fachada-> Para "acceder a las capacidades"
export const searchEstudianteFacade = async (id) => {
  return await searchEstudiante(id);
};

export const saveFacade = async (body) => {
  await save(body);
};

export const updateFacade = async (id,body) => {
  await update(id,body);
};
export const deleteFacade = async (id) => await delet(id);
