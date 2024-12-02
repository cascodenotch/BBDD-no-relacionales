let mongoose = require("mongoose");

// Conectar a la base de datos

mongoose.connect('mongodb://127.0.0.1:27017/codenotch')
    .then(() => console.log("Conexión correcta"))
    .catch(error => console.log("Error al conectar:", error));