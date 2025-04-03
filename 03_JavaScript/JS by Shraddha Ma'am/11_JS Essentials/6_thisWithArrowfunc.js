// Arrow function has lexical scope means it inherits the parent scope.
// Function scope has the 'this' keyword object calling scope.

const student = {
    name: "anubhav",
    marks: 95,
    prop: this,
    getName: function() {   //object scope
        console.log(this)
        return this.name
    },
    getMarks: () => {   // parent's scope and parent is student and student this is Window object.
        console.log(this)
        return this.marks
    }
}

console.log(student.getName())
console.log(student.getMarks())