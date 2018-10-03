// let out = undefined;
// for (let index = 0; index < 100; index++) {
//   if(index % 3 == 0) console.log('fizz');
//   else 
//     if(index % 5 == 0) console.log('fuzz');
//     else
//       console.log(index);  
// }

// real solution: 
for (let n = 0; n <= 100; n++) {
  let output = "";
  if(n % 3 == 0) output += "fizz";
  if(n % 5 == 0) output += "fuzz";
  console.log(output || n);
}