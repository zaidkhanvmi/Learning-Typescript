import axios, { type AxiosResponse } from "axios";

interface Todo { // interface are the most repeated code in ts to handle the data
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log("Todo", response.data);
    } catch (error: any) {
        throw new Error("Failed to get the data", error?.message);
    }
}

fetchData();

axios.get("https//example.com/data").then(response => {
    console.log(response.data);
});

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }