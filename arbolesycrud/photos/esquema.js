const mongoose = require('mongoose');

// Photo schema

const photoSchema = new mongoose.Schema({
    user: String,
    url: String,
    title: String,
    description: String,
});

const photosModel = mongoose.model("PhotosCollection", photoSchema, "photosCollection");

module.exports = {photosModel}
