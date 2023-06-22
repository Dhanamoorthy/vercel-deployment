const { json } = require("express/lib/response");
const fs = require("fs");
const os = require("os");

const [ , , arg1]= process.argv

const calculator = (num1,num2,operation)=>{
    switch (operation){
        case "add":
            return num1+nmm2;
        case "sub":
            return num1-num2;
        case "mul":
            return num1*num2;
        case "div":
            return num1/num2;
        default:
            return "please enter the argument"
    }
}

// const result=calculator(arg1,arg2,arg3)
// console.log(result)
// console.log(process)

// read a file
fs.readFile(`./${arg1}`,"utf-8",(err,data)=>{
    if(err){
        console.log("error:",err)
    }else{
        // json parse use for the sting module to object type of data
        const config=JSON.parse(data)
        console.log(typeof(config)); 
        console.log(config);
    }
}
)

//write a file
const content = "New file content"
fs.writeFile(`./results.txt`, content, (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("file written sucessfulyy")
    }
} )

// edit a file
const newContent = "\n New line content"
fs.appendFile("./results.txt", newContent, (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("file updated sucessfulyy")
    }
});

//delete a file
// fs.unlink("./results.txt", (err)=>{
//     if(err){
//         console.log("error ", err)
//     }else {
//         console.log("file deleted sucessfulyy")
//     } 
// })
console.log("os version----",os.version())
console.log("OS total memory---", os.totalmem())
console.log("OS free  memory---", os.freemem())
console.log("CPU info ---", os.cpus())




// creating a express
const express=require("express");
const fs = require("fs")
const path=require("path")
const dirName = path.join(__dirname,"timeStamps")

//initialize express
const app=express();

app.get("/",(req,res)=>{
    res.send("This is my first server")
})

app.get("/date-time",(req,res)=>{
    let date = new Date();
    let currentTimeStamp = date.toUTCString().slice(0,-3);
    let content = `The last updated timestamp:${currentTimeStamp}`
    console.log(dirName)

    fs.writeFile(`${dirName}/date-time.txt`,content,(err)=>{
        if(err){
            res.send("Error in wrinting the file")
            return
        }
        // res.send("File created successfully")
        res.sendFile(path.join(dirName,"date-time.txt"))
    })
}
)


//Listen to a server
app.listen(9000,()=>console.log(`server started in localhost:9000`));