const {pool} = require("../database")

async function get (request, response) {

    let respuesta;

    try {
    } catch (error) {
        console.log(error);
        respuesta = {
            error: true,
            codigo: 500,
            mensaje: 'Error interno'
        };
        }

    response.send(respuesta);
}

async function guardar (request, response) {

    let respuesta;

    try {
    } catch (error) {
        console.log(error);
        respuesta = {
            error: true,
            codigo: 500,
            mensaje: 'Error interno'
        };
        }

    response.send(respuesta);
}

async function editar (request, response) {

    let respuesta;

    try {
    } catch (error) {
        console.log(error);
        respuesta = {
            error: true,
            codigo: 500,
            mensaje: 'Error interno'
        };
        }

    response.send(respuesta);
}

async function deleteOne (request, response) {

    let respuesta;

    try {
    } catch (error) {
        console.log(error);
        respuesta = {
            error: true,
            codigo: 500,
            mensaje: 'Error interno'
        };
        }

    response.send(respuesta);
}

async function deleteAll (request, response) {

    let respuesta;

    try {
    } catch (error) {
        console.log(error);
        respuesta = {
            error: true,
            codigo: 500,
            mensaje: 'Error interno'
        };
        }

    response.send(respuesta);
}

module.exports = {get, guardar, editar, deleteOne, deleteAll};