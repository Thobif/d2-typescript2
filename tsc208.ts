let code : any = '123';
// let employeeCode = <number>code;
let employeeCode = code as number;

console.log(typeof(employeeCode));