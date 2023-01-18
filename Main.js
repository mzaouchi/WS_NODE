// console.log('Hello Node')

// function Somme(a,b){
//     return a+b
// }

// console.log(Somme(7,8))

// const Somme=(a,b)=>a+b

// console.log(Somme(10,17))

// console.log(process.argv)

// console.log(Somme(Number(process.argv[2]),Number(process.argv[3])))

// console.log(Somme(process.argv[2]*1,process.argv[3]*1))

// console.log(Somme(+process.argv[2],+process.argv[3]))

// const Sous = require('./ModuleLocal')
// const Multi = require('./ModuleLocal')
// console.log(Sous(+process.argv[2],+process.argv[3]))
// console.log(Multi(+process.argv[2],+process.argv[3]))


const obj = require('./ModuleLocal')

console.log(obj.Sous(+process.argv[2],+process.argv[3]))
console.log(obj.Multi(+process.argv[2],+process.argv[3]))

