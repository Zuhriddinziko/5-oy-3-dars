// Massiv va obyektlarga oid masalalar.
// 1-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// function studentss(person){
//     return person.map(student => ({ name: student.name, age: student.age }));
// }
// console.log(studentss(students));


// 2-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// function scores(obyekt){
// return Math.max(...students.map(student=>student.score))
// }
// console.log(scores(students))

// masala 3
// function studentsNameStart(studentss,element){
//     return studentss.filter(student=>student.name.startsWith(element))
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];
// console.log(studentsNameStart(students, 'A'));

// masala 4
// function qoshish(student){
//     const studentScore= student.reduce((sum,students)=>sum+students.score, 0)
//     return studentScore/student.length;
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// console.log(qoshish(students));

// masala 5
// function nameStudent(arr,element){
//     return arr.find(name=>name.name==element)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];
//   let a='John'
// console.log(nameStudent(students,a));

// masala 6
// function scoreFost(student,scor){
//     return student.find(students=>students.score>85)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
// console.log(scoreFost(students));

// masala 7
// function activeFost(student,sta){
//     return student.filter(students=>students.status===sta)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   const a='active' 
// console.log(activeFost(students,a));

// masala 8
// function ageFost(student,sta){
//     return student.every(students=>students.age>a)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
// let a=18;
// console.log(ageFost(students,a));

// masala 9
// function ageFost(student,sta){
//     return student.some(students=>students.score>a)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// let a=90;
// console.log(ageFost(students,a));

// masala 10
// function ageFost(student,students1){
//     return student.concat(students1)
// }
// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];
// console.log(ageFost(students1,students2));



// masala 11
// function ageFost(student){
//     const unikName=student.reduce((unik, students)=>{unik[students.name]=(unik[students.name]||0)+1;
//     return unik;},{});
//     return student.filter(students => nameCount[students.name] === 1);
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Alice', age: 23, score: 88, status: 'active' }
//   ];
//   console.log(ageFost(students));



// masala 12
// function ageFost(student){
//     return student.map(students=>({...students,
//     name: students.name.toUpperCase()}))
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   console.log(ageFost(students));


// masala 13
// function ageFost(student){
//     return student.map(students=>students.score)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   console.log(ageFost(students));


// masala 14
// function ageFost(student){
//     if(student.length===0){
//         return []
//     }else{
//     return Object.keys(student[0])

//     }
// }
//       const students = [
//         { name: 'Alice', age: 20, score: 85, status: 'active' }
//       ];

//   console.log(ageFost(students));


// masala 15
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };
// function nemStudent(oby,oby1){
//     return [...oby,oby1]
// }
// console.log(nemStudent(students,newStudent));

// masala 16
// function stuDele(student,name){
//     return student.filter(students=>students.name !==name)
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// let a ='Alice'
// console.log(stuDele(students,a));

// masala 17
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
//   function stuDele(student,age){
//     return student.every(students=>students.age>age)
// }
// let a =20;
// console.log(stuDele(students,a));


// masala 18
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
//   function ageFost(student){
//       return student.map(students=>students.status)
//     }
// console.log(ageFost(students));

// masala 19





// String metodlariga oid masalalar.
// masala 1
// function suppo(stu,a,b){
//     return stu.substring(a,b)
// }
// const a="Hello, world!";
// console.log(suppo(a,0,5));


// masala 2
// function suppo(str) {
//     return str.split('').map(char => {
//         if (char === char.toUpperCase()) {
//             return char.toLowerCase();
//         } else {
//             return char.toUpperCase();
//         }
//     }).join('');
// }
// const a="Hello, world!";
// console.log(suppo(a));


// masala 3
// function splitword(word){
//     return word.split(' ')
// }
// const a ="Hello world from JavaScript";
// console.log(splitword(a));


// masala 4
// function splitword(word){
//     return word.split(' ')
// }
// const a ="Hello world from JavaScript";
// console.log(splitword(a));

// masala 5
// function splitword(word){
//     return word.replaceAll('a', '@')
// }
// let a ='JavaScript'
// console.log(splitword(a));

// masala 6
// function splitword(word){
//     return word.trim()
// }
// let a = ' Hello world '
// console.log(splitword(a));

// masala 7
// function splitword(word,a){
//     return word.charAt(a)
// }
// const a= 'hello world'
// const b='7'
// console.log(splitword(a,b));

// masala 8
// function splitword(word,a){
//     return word.includes(a)
// }
// const a= 'hello world'
// const b='world'
// console.log(splitword(a,b));

// masala 9
// function splitword(word,a){
//     return word.startsWith(a)
// }
// const a= 'hello world'
// const b='hello'
// console.log(splitword(a,b));

// masala 10
function splitword(word,a){
    return word.endsWith(a)
}
const a= 'hello world'
const b='world'
console.log(splitword(a,b));