// const process = require('process');
// for (let i = 1; i<1000; i++){
//   if (i%30 === 0){
//     setTimeout(() => { process.stdout.write(`${i%30}\n`)},999);
//   } else {
//     setTimeout(() => { process.stdout.write(`${i%30}`)},999);
//   }
// }

// This will work
const i = (test) => {
  console.log(i)
};
i();

//This won't work because it's synchronous (assignment is not completed by the time j is called on)
const j = ((test) => {
  console.log(j)
})();
