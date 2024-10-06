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
            throw new Error("There is an error in the network response.")
        } else {
            return response.json();
        }
    })
    .then(data => {
        // console.log(data);
        const person = data.name;
        console.log(`Person (ID: ${id}): ${person}`);
    })
    .catch((error) => {
        console.log("Error fetching a character", error);
    })
}

fetchDataById(12);


