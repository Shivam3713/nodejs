// Create a node js application to write a string " this is node js class" into buffer and print first five and last 3 char of the string on the console using module.

// const buffer1 = Buffer.alloc(8)

// const buffer2 = Buffer.from("this is node js class", 'utf-8')
// console.log(buffer2.toString());

// const text = buffer2.toString();

// for(i = 0; i<5; i++ ) {
//     console.log(text[i])
// }
// for(i = text.length; i>(text.length-4); i-- ) {
//     console.log(text[i])
// }
var buffer1 = Buffer.alloc(50);
var buffer2 = Buffer.from("This is Node JS class");

var text = buffer2.toString();
console.log(text);

console.log(text.slice(0,5));
console.log(text.slice(text.length-3));