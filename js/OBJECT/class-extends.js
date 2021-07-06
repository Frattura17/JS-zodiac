function classExtends(){

class User {
    constructor(name, lastname, email, password) {  
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    sayHello() {
        console.log(`Bienvenido ${this.name} ${this.lastname}`)
    }
}

let user = new User('Jose', 'Jose', 'Jose@gmail.com', 0000)
console.log(user)

class Employee extends User {
    constructor(name, lastname, email, password, seniority, role, salary) {
        super(name, lastname, email, password);
        this.seniority = seniority;
        this.role = role;
        this.salary = salary;
    }
    salaryAmount(days ) {
        let bonus = 5000;
        let prepaga = 10000;
        let amount = this.salary * days + bonus - prepaga;
        return `El salario de ${this.name} del mes es de $${bonus + amount}`;
    }
}

class Student extends User {
    constructor(name, lastname, email, password, course, courseType) {
        super(name, lastname, email, password);
        this.course = course;
        this.courseType = courseType;
    }
    catalog() {
        return `Los cursos habilitados son FullStack, React Native, Angular, English`;
    }
    courseResume(){
        return `Los proyectos restantes del curso ${this.course} son: Backend`
    }
}



let employee1 = new Employee('Jose', 'Perez', 'jose@gmail.com', 1234, '3 years', 'mentor', 2000);
let student1 = new Student('Alumno', 'React', 'student@gmail.com', 1234, 'Comision 12i');

// console.log(Object.keys(employee1));
// console.log(Object.values(employee1));

let objValuesProperties = Object.keys(employee1);
let objValues = Object.values(employee1);
// console.log(objValuesProperties);
console.log(objValues);

//Object entries
// for(let i=0; i<objValuesProperties.length; i++) {
//     // muestro los array internos
//     let key = objValuesProperties[i][0];
//     let value = objValuesProperties[i][1]
//     console.log(`El valor de la propiedad ${key} es de ${value}`);
// }

//Object keys
// for(let i=0; i<objValuesProperties.length; i++) {
//         // muestro los array internos
    
//         console.log(`El valor de la propiedad ${objValuesProperties[i]} es de ${employee1[objValuesProperties[i]]}`);
//}
console.log('fullnamito', employee1.sayHello());
// Object values
for(let i=0; i<objValues.length; i++) {
    if(objValues[i] == 'mentor') {
        console.log('El usuario si es un Mentor');
        break;
    } else {
        console.log('No se encontro el usuario')
    }
}

if(employee1.hasOwnProperty('password')) {
    console.log('Encontro la propiedad')
}

// for(let key in employee1) {
//     console.log(key);
//     console.log(`El valor de la propiedad ${key} es ${employee1[key]}`);
// }







// console.log(employee1.salaryAmount(20));
    //false -> true

// console.log(student1.courseResume())
// class Student {
       
// }
}
