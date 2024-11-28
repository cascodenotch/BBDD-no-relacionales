let mongoose = require("mongoose");
let {photosModel} = require("./esquema");

// Conectar a la base de datos

mongoose.connect('mongodb://127.0.0.1:27017/codenotch')
    .then(() => console.log("Conexión correcta"))
    .catch(error => console.log("Error al conectar:", error));

// Crear un dato
let photo1 = new photosModel({
    firstName: "Catalina",
    photo: "url" ,
    title: "titulo",
    description: "descripcion",
});

// Guardar dato
photo1.save()
.then((result) => {
    console.log("Foto 1 guardada con éxito");
  })
.catch((err) => {
    console.error("Error al guardar foto:", err);
  });

