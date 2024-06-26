//  For of Loops 

const arr = [1,2,3,4,5,6,7,8,9,]

for (const num of arr) {
    console.log(num);
}

const greetings = "HELLO WORLD!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps (It is only for unique value)(No duplication of data)

const map = new Map()
map.set('NP',"Nepal")
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA',"United States Of America")
console.log(map);
// For of loop in maps
for (const [key, value] of map) {
    console.log(key, ':-', value);  
}

// For of loop in object
const myobj = {
    js : "java Script"

}
for (const iterator of object) {
    
}

// For each loop 

const lang = ["Js","Ruby","python","C++"]
lang.forEach( function(item) {
    console.log(item);
})