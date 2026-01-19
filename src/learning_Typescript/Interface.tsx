interface Chai {
    flavor: string;
    price: number;
    milk?: boolean; // "?" optional
}

const masala: Chai = {
    flavor: "masala",
    price: 20,
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = { id: 1, name: "Chaicode caffe" };
// s.id = 2 // can't change this is only readOnly

interface DiscountCalculator {
    (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Start");
    },
    stop() {
        console.log("stop");
    },
}

interface ChaiRating {
    [flavour: string]: number;
}

const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 5.5
}

interface User {
    name: string;
}

interface User {
    age: number;
}

// interface can be multple and they can be merged
const u: User = {
    name: "zaid",
    // age: 40
}

interface A { a: string }

interface B { b: string }

interface C extends A, B {
    Class: string;
}

// const data: C = {
//     a: "a",
//     b: "B",
//     Class: "12th"
// }

