interface Todo { // interface are the most repeated code in ts to handle the data
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok)
            throw new Error(`HTTP error ${response.status}`);
        const data: Todo = await response.json();
        console.log("Todo", data);
    } catch (error: any) {
        throw new Error("Failed to get the data", error?.message);
    }
}

fetchData();


// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }