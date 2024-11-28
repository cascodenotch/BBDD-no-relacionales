const mongoose = require('mongoose');

// Teacher schema

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    grupos: [String],
});

// Subject schema

const subjectSchema = new mongoose.Schema({
    title: String,
    teachers: [teacherSchema],
});

// Marks schema

const markSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: subjectSchema,
});

// Student schema
const studentSchema = new mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    marks: [markSchema],
});

const StudentModel = mongoose.model("StudentsCollection", studentSchema, "studentsCollection");

module.exports = { StudentModel };