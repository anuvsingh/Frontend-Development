const student = {
    name: "Anubhav",
    age: "20",
    marks: "84",
    city: "Varanasi"
}
console.log(student)

student.city = "Ballia"
console.log(student)

student.gender = "Male"
console.log(student)

delete student.age
console.log(student)