let data = 42;

//data = 'dhana'; // Error : 'string' is not assignable to type 'number'

// Typescript is smart enough to predict the value even though we did mentioned string explicitly.

console.log(data);

let value : number | string = 42;

value = 'string';

export interface Duck {
    name : string;
    numOfLegs : number;
    makeSound: (sound: string) => void;
}

const duck1= {
    name : 'dhana',
    numOfLegs : 2,
   // makeSound: (sound) => console.log(sound) //Error : parameter 'sound' has implicitly 'any' type.
   makeSound : (sound : string) => console.log(sound)
}

const duck2= {
    name : "pintu",
    numOfLegs : 2,
    makeSound : (sound : string) => console.log(sound)
}

duck1.makeSound('quack');
duck2.makeSound('huuuu');

export const ducks = [duck1, duck2];