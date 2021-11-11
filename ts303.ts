let countries: string = "Thailand";
let province: string = "trat" ;
//Pre-es6
let name5: string = countries + "My Country" + province + "My Province";
console.log(name5)
//Pose-es6
let name6: string = `${countries} My Country ${province} My Province`; 
console.log(name6);
