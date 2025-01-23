// "This" keyword refers to an object that is executing the current piece of code.
const student = {
    name: "anubhav",
    age: 21,
    eng: 95,
    phy: 70,
    math: 50,
    getAvg() {
        console.log(this)
        let avg = (this.eng + this.math + this.phy) / 3
        console.log(`${this.name} got average marks = ${avg}`)
    }
}
student.getAvg();