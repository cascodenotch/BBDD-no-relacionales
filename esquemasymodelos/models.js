const mongoose = require('mongoose');

// User schema
const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate: [
            function(password) {
                return password.length >= 6; 
            },
            'El password debe tener al menos 6 caracteres'
        ],
        select: false 
    }
});

// Profile schema
const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    comments: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ["admin", "user", "guest"], 
        required: true
    }
});


// Credentials schema
const CredentialsSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", UserSchema, "users");
const Profile = mongoose.model("Profile", ProfileSchema, "profiles");
const Credentials = mongoose.model("Credentials", CredentialsSchema, "credentials");

module.exports = { User, Profile, Credentials };
