const mongoose = require('mongoose');

// Teacher schema

const teacherSchema = new mongoose.Schema({
    teacher_first_name: String, 
    teacher_last_name: String,
})

// Mark schema

const markSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String, 
    student_last_name: String,
    group_name: String,
    subject_name: String, 
    teachers: [teacherSchema]
});


const markModel = mongoose.model("MarksCollection", markSchema, "marksCollection");

module.exports = { markModel };