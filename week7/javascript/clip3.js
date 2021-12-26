// console.log('Hello Wolde');
// const a = 'a';

// if(a === 'a'){
//     console.log(a);
// }

// {
//     var foo = 'f00';
//     console.log(foo);
// }

// console.log(foo);

// function bar(){
//     var baz = 'baz';
//     console.log(baz);
//     console.log(foo);
// }

// bar();

// console.log(text);
// var text = 'Hello Wolde';

// const firstName = 'Jin';
// const lastName = 'Kim';

// console.log(`${firstName}-${lastName}`);

// const n = 18;
// const three = n % 3 === 0;
// const five = n % 5 === 0;

// if(three && five){
//     console.log('15');
// }else 
//     if(three){
//         console.log('3');
//     }else if(five){
//         console.log('5');
// }

// const n = 15 / 3;
// console.log(n % 4 === 0 && '5의 배수');

// const age = 20;
// const canDrink = age >= 20 ? true : false;

// console.log(canDrink);

// const n = 15;

// switch(n %3){
//     case 0:
//         console.log('3 ok');
//         break;
//     default:
//         console.log('3 no');
// }

// for(let i =0; i <5; i++){
//     console.log('HI');
// }

// let n = 0;

// while(n < 10){
//     console.log('ssss'+n);
//     n += 1;
// }


// var sss = function(a){
//     console.log(`Hi ${a}!`);
// }

// function sss(a){
//     console.log(`Hi ${a}!`);
// }

// const sss = (a) => {return a * 2};
// const sss = a => {return a * 2};
// const sss = a => a * 2;

// console.log(sss(3));

// function Aaa(a){
//     this.a = a;
// }
// Aaa.prototype.bbb = function (){
//     console.log(`Hi my name is ${this.a}.`);
// };

// const me = new Aaa('jin', 99);
// me.bbb();

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fulName(){
//         return `${this.firstName} ${this.lastName}`;
//     }

//     sayHello(){
//         console.log(`Hi! My name is ${this.fulName}`);
//     }
// }
// const me = new Person('Jin', 'Kim');
// me.sayHello();

class Animal{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log('attack');
    }
}
class Lion extends Animal{
    constructor(name, color){
        super (name);
        this.color = color;
    }

    sayHello(){
        console.log('attack!!!!!!!!!');
    }
}
const me = new Lion('Jin', 'Kim');
me.sayHello();