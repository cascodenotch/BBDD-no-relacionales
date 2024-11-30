let mongoose = require("mongoose");
let {markModel} = require("./esquema");

// Conectar a la base de datos

mongoose.connect('mongodb://127.0.0.1:27017/codenotch')
    .then(() => console.log("Conexión correcta"))
    .catch(error => console.log("Error al conectar:", error));

// Crear datos

// let teacher1 = { teacher_first_name: "John", teacher_last_name: "Doe" };
// let teacher2 = { teacher_first_name: "Jane", teacher_last_name: "Smith" };
// let teacher3 = { teacher_first_name: "Emily", teacher_last_name: "Brown" };

// let mark1 = new markModel({
//     date: new Date('2024-11-01'),
//     mark: 8,
//     student_first_name: "Alice",
//     student_last_name: "Brown",
//     group_name: "Group A",
//     subject_name: "Math",
//     teachers: [teacher1]
// });

// let mark2 = new markModel({
//     date: new Date('2024-11-02'),
//     mark: 9,
//     student_first_name: "Bob",
//     student_last_name: "Johnson",
//     group_name: "Group B",
//     subject_name: "Science",
//     teachers: [teacher2]
// });

// let mark3 = new markModel({
//     date: new Date('2024-11-03'),
//     mark: 7,
//     student_first_name: "Charlie",
//     student_last_name: "Davis",
//     group_name: "Group C",
//     subject_name: "History",
//     teachers: [teacher1, teacher2]
// });

// let mark4 = new markModel({
//     date: new Date('2024-11-04'),
//     mark: 6,
//     student_first_name: "Diana",
//     student_last_name: "Evans",
//     group_name: "Group A",
//     subject_name: "Biology",
//     teachers: [teacher3]
// });

// let mark5 = new markModel({
//     date: new Date('2024-11-05'),
//     mark: 10,
//     student_first_name: "Evan",
//     student_last_name: "Foster",
//     group_name: "Group B",
//     subject_name: "Chemistry",
//     teachers: [teacher1]
// });

// let mark6 = new markModel({
//     date: new Date('2024-11-06'),
//     mark: 5,
//     student_first_name: "Fiona",
//     student_last_name: "Garcia",
//     group_name: "Group C",
//     subject_name: "Physics",
//     teachers: [teacher2]
// });

// let mark7 = new markModel({
//     date: new Date('2024-11-07'),
//     mark: 9,
//     student_first_name: "George",
//     student_last_name: "Harris",
//     group_name: "Group A",
//     subject_name: "Geography",
//     teachers: [teacher1, teacher3]
// });

// let mark8 = new markModel({
//     date: new Date('2024-11-08'),
//     mark: 7,
//     student_first_name: "Hannah",
//     student_last_name: "Iverson",
//     group_name: "Group B",
//     subject_name: "English",
//     teachers: [teacher2]
// });

// let mark9 = new markModel({
//     date: new Date('2024-11-09'),
//     mark: 8,
//     student_first_name: "Ian",
//     student_last_name: "Jacobs",
//     group_name: "Group C",
//     subject_name: "Literature",
//     teachers: [teacher3]
// });

// let mark10 = new markModel({
//     date: new Date('2024-11-10'),
//     mark: 6,
//     student_first_name: "Julia",
//     student_last_name: "Klein",
//     group_name: "Group A",
//     subject_name: "History",
//     teachers: [teacher1, teacher2]
// });


// // // Crear documentos

// mark1.save()
// .then(() => {
//     console.log("Nota 1 guardado con éxito");
//     return mark2.save();
//   })
// .then(() => {
//     console.log("Nota 2 guardado con éxito");
//     return mark3.save();
//   })
// .then(() => {
//     console.log("Nota 3 guardado con éxito");
//     return mark4.save();
//   })
// .then(() => {
//     console.log("Nota 4 guardado con éxito");
//     return mark5.save();
//   })
// .then(() => {
//     console.log("Nota 5 guardado con éxito");
//     return mark6.save();
//   })
// .then(() => {
//     console.log("Nota 6 guardado con éxito");
//     return mark7.save();
//   })
// .then(() => {
//     console.log("Nota 7 guardado con éxito");
//     return mark8.save();
//   })
// .then(() => {
//     console.log("Nota 8 guardado con éxito");
//     return mark9.save();
//   })
//   .then(() => {
//     console.log("Nota 9 guardado con éxito");
//     return mark10.save();
//   })
//   .then(() => {
//     console.log("Nota 10 guardado con éxito");
//   })
// .catch((err) => {
//     console.error("Error al guardar notas", err);
//   });


// Consultas

// Nota media por asignatura

markModel
.aggregate([
    {$group: {_id: { "Asignatura": "$subject_name" }, "Nota media": { $avg: "$mark" }}}
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Número total de alumnos

markModel
.aggregate([
    { $group: {_id: { firstName: "$student_first_name", lastName: "$student_last_name"}}}, 
    { $count: "Número total de alumnos"}
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Lista nombre y apellidos de todos los alumnos

markModel
.aggregate([{$project: {"Nombre": "$student_first_name", 
            "Apellido": "$student_last_name",
            _id: 0}
}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Lista nombre y apellidos de todos los profesores

markModel
.aggregate([{$unwind: "$teachers"},
    {$project: {"Nombre": "$teachers.teacher_first_name", 
                "Apellido": "$teachers.teacher_last_name",
                _id: 0}
}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})


// Total de alumnos por grupo (orden inverso al alfabeto)

markModel
.aggregate([
    { $group: { _id: "$group_name", totalAlumnos: {$sum: 1}}}, 
    { $sort: { _id: -1 }}
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Top 5 asignaturas con nota media mayor que 5

markModel
.aggregate([
    {$group: {_id: { "Asignatura": "$subject_name" }, 
    "Nota media": { $avg: "$mark" }}},
    {"$match": {"Nota media": {"$gt": 5}}},
    {"$sort": {"Nota media": -1}},
    {$limit: 5}
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Número de profesores por asignatura

markModel
.aggregate([
    {$unwind: "$teachers"},
    {$group: {"_id": { "Asignatura": "$subject_name" }, "Total profesores": {"$sum": 1}}}
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Alumnos con nota mayor a 8 o nota con fecha del año anterior

markModel
.aggregate([
    {$match: {"$or": [{mark: {"$gte": 8}}, { date: { $lt: new Date('2024-01-01') } } ]}},
    {$project: {student_first_name: 1, student_last_name: 1, _id: 0}}
    ])
    .then((result) =>
    {
        console.log(result);
    })
    .catch((error) =>
    {
        console.log(error);
    })

// Media de las notas en el último año por asignatura

markModel
.aggregate([
    {$match: {date: { $gte: new Date('2024-01-01') }}},
    {$group: {_id: { "Asignatura": "$subject_name" }, "Nota media": { $avg: "$mark" }}},
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Nota media de cada aluno en el último año

markModel
.aggregate([
    {$match: {date: { $gte: new Date('2024-01-01') }}},
    {$group: {_id: { firstName: "$student_first_name", lastName: "$student_last_name"}, "Nota media": { $avg: "$mark" }}},
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Cantidad de asignaturas que cada estudiante tiene con Emiliy

markModel
.aggregate([
    {$unwind: "$teachers"},
    {$match: { "teachers.teacher_first_name": "Emily" } },
    {$group: {_id: { firstName: "$student_first_name", lastName: "$student_last_name"}, "Asignaturas con Emily": {$sum: 1}}},
])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})







