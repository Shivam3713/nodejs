
// console.log(bioData.employee);

// const jsonData = JSON.stringify(bioData); //json format
// // console.log(jsonData);
// // console.log(jsonData.employee); // gives us an undefined
// const objData= JSON.parse(jsonData); //normal formar
// console.log(objData);
// const fs= require("fs");
// fs.readFile('json1.json', "utf-8", (err, data)=>{
//     const orgData = JSON.parse(data);
//     console.log(data);
//     console.log(orgData);
// });

const fs= require("fs");
const prompt= require('prompt-sync')();
var http= require('http');
var student = new  Object();
student.name = prompt("enter name of the student : ");
student.age= Number(prompt("enter the age of the student: "));
student.gender = prompt("enter the gender of the student : ");

let data = JSON.stringify(student, null, 2);
fs.writeFile('student.json', data, (err)=>{
    if(err) throw err;
    console.log('Data written to file');
});
var server = http.createServer(function( req, res){
    fs.readFile('student.json', (err, data)=>{
        if(err) throw err;
        let stud= JSON.parse(data);
        res.write(JSON.stringify(stud, NULL, 1));
        res.end();
    })
})