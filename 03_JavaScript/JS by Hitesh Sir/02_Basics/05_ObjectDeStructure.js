const course = {
    courseName: "Chai aur JS",
    price: "999",
    courseTeacher: "Hitesh Sir"
}

const {courseTeacher} = course
const {courseTeacher: instructor} = course

console.log(instructor);

// We send Objects in JSON form in real world projects