// let student = {'name':'mark','code' : 123};
// student.name 
// student.code 

interface Student {
    name : string ;
    code : number ;
}
let student = <Student> {} ;
let std1 = student.name = "Mark" ;
console.log(std1);