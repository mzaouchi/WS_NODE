
const fs = require('fs')

// console.log('Start')

// fs.readFile('./Names.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// console.log(fs.readFileSync('./Names.txt','utf-8'))

const bo = fs.readFileSync('./Names.txt','utf-8')

// console.log("Finish")

const http = require('http')

http.createServer((req,res)=>{
    res.write(bo)
    res.end()
}).listen(5000, console.log('Server is running'))