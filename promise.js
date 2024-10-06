// Create promise
let mypromise = new Promise((resolve, reject) => {
    resolve("Success");
});

mypromise.then((message) => {
    console.log(message);
});


// Fetch data from API
const fetchDataById = (id) => {
    // const promise = fetch(`https://anapioficeandfire.com/api/characters/${character}`)
    // console.log(promise);

    fetch(`https://anapioficeandfire.com/api/characters/${id}`).then((response) => {
        // console.log(response);

        if(!response.ok) {
            throw new Error("Network response was not ok.")
        } else {
            return response.json();
        }
    })
    .then(data => {
        // console.log("Data received: ", data);
        const person = data;
        console.log(`Person (ID: ${id}): ${person}`);
    })
    .catch((error) => {
        console.log("There was a prombem while fetching data", error);
    })
}

fetchDataById(12);


