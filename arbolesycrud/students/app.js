let mongoose = require("mongoose");
let {StudentModel} = require("./esquemas");

// Conectar a la base de datos

mongoose.connect('mongodb://127.0.0.1:27017/codenotch')
    .then(() => console.log("Conexión correcta"))
    .catch(error => console.log("Error al conectar:", error));


// Crear datos iniciales

let teacher1 = { firstName: "John", lastName: "Doe", grupos: ["A", "B"] };
let teacher2 = { firstName: "Jane", lastName: "Smith", grupos: ["C"] };

let subject1 = { title: "Math", teachers: [teacher1, teacher2] };
let subject2 = { title: "History", teachers: [teacher1] };

let mark1 = { date: new Date(2024, 11, 25), mark: 90, subject: subject1 };
let mark2 = { date: new Date(2024, 11, 25), mark: 75, subject: subject2 };
let mark3 = { date: new Date(2024, 11, 25), mark: 60, subject: subject1 };
let mark4 = { date: new Date(2024, 11, 25), mark: 55, subject: subject2 };
let mark5 = { date: new Date(2024, 11, 25), mark: 30, subject: subject1 };
let mark6 = { date: new Date(2024, 11, 25), mark: 100, subject: subject2 };
let mark7 = { date: new Date(2024, 11, 25), mark: 70, subject: subject1 };
let mark8 = { date: new Date(2024, 11, 25), mark: 80, subject: subject2 };

let student1 = new StudentModel({
    firstName: "Alice",
    lastName: "Brown",
    marks: [mark1, mark2],
  });

let student2 = new StudentModel({
    firstName: "Laura",
    lastName: "Gomez",
    marks: [mark3, mark4]
});

let student3 = new StudentModel({
    firstName: "Maria",
    lastName: "Perez",
    marks: [mark5, mark6]
});

let student4 = new StudentModel({
    firstName: "Claudia",
    lastName: "Torres",
    marks: [mark7, mark8]
});
  
// Crear documentos

student1.save()
.then(() => {
    console.log("Estudiante 1 guardado con éxito");
    return student2.save();
  })
.then(() => {
    console.log("Estudiante 2 guardado con éxito");
    return student3.save();
  })
.then(() => {
    console.log("Estudiante 3 guardado con éxito");
    return student4.save();
  })
.then(() => {
    console.log("Estudiante 4 guardado con éxito");
  })
.catch((err) => {
    console.error("Error al guardar el estudiante:", err);
  });


// Consultas

StudentModel.findOne({ firstName: 'Alice' })
    .then(student => {
        if (student) {

            student.marks.forEach(mark=> {
                let notas = mark.mark;
                console.log ("Nota: " + notas);
            })

        } else {
            console.log("Estudiante no encontrado");
        }
    })
    .catch(err => {
        console.error("Error al buscar notas:", err);
    });

StudentModel.findOne({ firstName: 'Alice' })
    .then(student => {
        if (student) {

            student.marks.forEach(mark=> {
                let asignaturas = mark.subject;
                console.log ("Asignatura: " + asignaturas.title);
            })

        } else {
            console.log("Estudiante no encontrado");
        }
    })
    .catch(err => {
        console.error("Error al buscar asiganturas:", err);
    });

StudentModel.findOne({ firstName: 'Alice' })
    .then(student => {
        if (student) {
        
            student.marks.forEach(mark=> {
                let asignatura = mark.subject;
                asignatura.teachers.forEach (profesor =>{
                    console.log("Profe: " + profesor.firstName)
                })   
            })

        } else {
            console.log("Estudiante no encontrado");
        }
    })
    .catch(err => {
        console.error("Error al buscar profe:", err);
    });


