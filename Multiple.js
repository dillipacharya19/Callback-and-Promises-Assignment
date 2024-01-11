// 7. Multiple request.

async function getCombinedData() {
    const [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
        response.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>

            response.json()
        ),
    ]);
        const getCombinedData = {
            todo: data1,
            post: data2,
        };
        return getCombinedData;
   
}

getCombinedData().then((data) => console.log(data));