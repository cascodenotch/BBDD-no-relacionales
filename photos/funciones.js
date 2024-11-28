let mongoose = require("mongoose");
let {photosModel} = require("./esquema");
const { domainToASCII } = require("url");
const { getDefaultResultOrder } = require("dns");

// Conectar a la base de datos

mongoose.connect('mongodb://127.0.0.1:27017/codenotch')
    .then(() => console.log("Conexión correcta"))
    .catch(error => console.log("Error al conectar:", error));

// Creación de datos 

let photo1 = {
    user: "cas92",
    photo: "url" ,
    title: "titulo",
    description: "descripcion1",
};

let photo2 = {
    user: "pau97",
    photo: "url1" ,
    title: "titulo1",
    description: "descripcion1",
};

let photo3 = {
    user: "pau97",
    photo: "url2" ,
    title: "titulo2",
    description: "descripcion2",
};
    
// Funciones

function uploadPhoto (photo){

    photosModel.create(photo)
    .then(result => {
        console.log('Foto creada con éxito:', result);
    })
    .catch(error => {
        console.error('Error al crear foto', error);
    });
}

function getPhotos (user){
    photosModel.find({user: user})
    .then( result => {
        console.log('Fotos del usuario conseguidas con éxito:', result);
    })
    .catch(error => {
        console.error('Error al obtener las fotos:', error);
    });
}

function editPhoto (title, description){
    photosModel.updateOne({title:title, description: description})
    .then(result => {
        console.log('Foto editada con éxito:', result);
    })
    .catch(error => {
        console.error('Error al editar foto', error);
    });
}

function deletePhoto (user, title,){
    photosModel.deleteOne({user:user, title:title})
    .then(result => {
        console.log('Foto de usuario eliminada con éxito:', result);
    })
    .catch(error => {
        console.error('Error al eliminar foto de usuario', error);
    });
}

function deleteAll (user){
    photosModel.deleteMany({user:user})
    .then(result => {
        console.log('Fotos de usuario eliminadas con éxito:', result);
    })
    .catch(error => {
        console.error('Error al eliminar fotos de usuario', error);
    });
}

// Comprobación funciones 

uploadPhoto (photo1);
uploadPhoto (photo2);
uploadPhoto (photo3);
getPhotos ("pau97");
editPhoto ("titulo1", "nueva descripcion");
deletePhoto ("pau97", "titulo2",);
deleteAll ("cas92");