class Student {
    constructor(name) {
        this.name = name
    }
    greet (){
        console.log(`Hi! My name is ${this.name}`);
    }
}

class ProtoStodent {
    uni = "Oxford"
}

const student = Reflect.construct(Student, ['Andrey']) 
// ProtoStodent)

// console.log(student.__proto__=== ProtoStdent.prototype);
Reflect.apply(student.greet, {name: 'Tester'}, [])
console.log(Reflect.ownKeys(student));

Reflect.preventExtensions(student)

console.log(Reflect.isExtensible(student))
student.age = 25
console.log(student);