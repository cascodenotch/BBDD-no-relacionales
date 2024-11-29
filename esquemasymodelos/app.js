let mongoose = require("mongoose");
let { User, Profile, Credentials } = require("../models");

// Conectar a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/codenotch')
    .then(() => console.log("Conexión correcta"))
    .catch(error => console.log("Error al conectar:", error));

// Crear documentos
let userDocument = new User({
    login: "testUser",
    password: "securePassword123"
});

let profileDocument = new Profile({
    name: "John",
    surname: "Doe",
    dateOfBirth: new Date("1990-01-01"),
    comments: "Este es un usuario de prueba.",
    role: "admin"
});

let credentialsDocument = new Credentials({
    address: "123 Main St",
    phone: "555-1234",
    email: "johndoe@example.com"
});

// Guardar documentos
userDocument.save()
    .then(resp => console.log("Usuario guardado correctamente:", resp))
    .catch(error => console.log("Error al guardar usuario:", error));

profileDocument.save()
    .then(resp => console.log("Perfil guardado correctamente:", resp))
    .catch(error => console.log("Error al guardar perfil:", error));

credentialsDocument.save()
    .then(resp => console.log("Credenciales guardadas correctamente:", resp))
    .catch(error => console.log("Error al guardar credenciales:", error));
