"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function(){
        console.log('test');
    }
}

options.makeTest();

// count the number of properties in an object using a loop
let counter = 0;
for(let key in options){
    counter++;
}
console.log(counter);
// alternatively counting the number of properties of an object - recommended
console.log(Object.keys(options).length);

delete options.name;

for(let key in options){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// destructuring

const{border, ...rest}  = options.colors;
console.log(border);
console.log(rest);
