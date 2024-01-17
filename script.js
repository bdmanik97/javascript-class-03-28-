
// loop incriment

// for(let i=1; i<=20; i++){
//     console.log('Hello i am Manik ray');
//     console.log(i);
// }


// looop decriment

// for(let i=10; i>=5; i--){
//     console.log('Hello i am Manik ray');
//     console.log(i);
// }

// Pree+Post Incriment
 
// let i = 10;

// console.log(++i);
// console.log(i++)
// console.log(i)


// Pree+Post Decrement

// let i = 30;

// console.log(--i);
// console.log(i--)
// console.log(i) 


// // pass/Fail start here
// let marks = [40, 30, 50, 88, 77, 66, 22, 99, 35, 84,30, 50, 88, 77, 66, 22, 99, 35, 84, 66, 22, 99, 35, 84,30, 50, 88, 77, 66, 22, 99, 35, 84];

// // Array length ber karar jonno

// let arraylength = marks.length;
// console.log(arraylength);

// for (let i=0; i<arraylength; i++){
//     // console.log(marks[i]);

//     if(marks[i] > 32){
//         console.log(marks[i]+'=Pass');
//     }

//     else{
//         console.log(marks[i]+'=Fail');
//     }
// }
// // pass/Fail end here


// Even/Odd start here
let marks =[55,65,52,58,95,78,87,14,25,5,23,32,35,36,48,84,74,49,54,41,42,]

let markslength = marks.length;
    console.log(markslength)

for(let i=0; i<markslength; i++){
    let remainder = marks[i]%2;

if(remainder == 0){
    console.log(marks[i]+ "=Even")
}

else{
    console.log(marks[i]+ '=Odd')
 }
}
// Even/Odd end here