// let size = 8;
// let val = false;
// let out = "";
// for (let index = 0; index < size; index++) {
//   for (let jidex = 0; jidex < 4; jidex++) {
//     out += val ? "#" : " ";
//     console.log(out);
//     val = !val;

//     if(out.length == size){
//       out += "\n";
//       console.log(out);
//     }
//   }
// }

// real solution:
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);