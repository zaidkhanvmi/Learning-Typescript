// Generics means General functions

// in Generics we get what we pass any Character T..
function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("masala");
wrapInArray(41);
wrapInArray({ falvour: "Generics" });

function pair<A, B>(a: A, b: B): [A, B] {
    // return [b,a]; we can't do this
    return [a, b]; // so we can only return like wise
}

// pair("masala", "testing");
pair("masala", "testing");


// also generics interface
interface Box<T> {
    content: T
}

const numberBox: Box<number> = { content: 10 }
const numberBox1: Box<string> = { content: "10" }

interface ApiPromise<T> {
    status: number;
    data: T;
}

const res: ApiPromise<{ flavor: String }> = {
    status: 200,
    data: {
        flavor: "strwbery",
    }
}