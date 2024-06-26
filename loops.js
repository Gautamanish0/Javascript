// FOR LOOP

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}
// console.log("Hello World");

// TABLE of 0 to 10 

for (let i = 1; i <=10; i++) {
    console.log('Outer Loop Value : ${i}');
    for (let j = 1; j <= 10 ; j++) {
        console.log(`Outer Loop Value : ${}`);
        console.log(i + "*" + j + "=" + i*j);
        
    }
    
}


// For Loop used in Array 
let myarray = ["Anish", "Ram", "Hari", "Shyam"]
console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

//  continue

for (let index = 1; index <= 10; index++) {
    // const element = array[index];
    console.log(`Value of i is ${index}`);
}


//  While Loop 

let index = 0;
while (index <=10) {
    console.log(`The value of index is ${index}`);
    index = index = 2
    
}

// Array in while loop 

let myArray = ["Anish", "Ram", "Hari", "Shyam"]
console.log(myArray.length);
let arr = 0 
while (arr <myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
    
}

// do while loop

let score = 20
do {
    console.log(`Score is ${score}`);
    score ++
} while (score <=10);
