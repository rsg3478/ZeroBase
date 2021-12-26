type Person = {
// interface Person{
    name: string;
    //물음료는 age에 값이 있을수도 있고 없을수도 있다는 의미
    age?: number;
}
// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }

type Developer = Person &{
// interface Developer extends Person{
    skills: string[];
}

const person: Person = {
    name: '김사람',
    age: 20
};
  
const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

// Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
type People = Person[]; 
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];