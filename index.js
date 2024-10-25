// no.1 Function to create a delay using a Promise
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const message = `Delay of ${ms / 1000} seconds is over!`;
            displayOutput(message);
            console.log(message);
            resolve();
        }, ms);
    });
};

const displayOutput = (message) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += message + '<br>';
};


displayOutput("Starting delay...");
console.log("Starting delay...");

delay(2000)
    .then(() => {
        const message = "Delay task completed!<br>";
        displayOutput(message);
        console.log("Delay task completed!");
    })
    .catch((error) => {
        const errorMessage = "An error occurred during delay: " + error;
        displayOutput(errorMessage);
        console.error(errorMessage);
    });

// no.2 Function to simulate fetching data from an API
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            const message = "Fetched data: " + randomNumber;
            displayOutput(message);
            console.log(message);
            resolve(randomNumber);
        }, 2000);
    });
};

// no.3 Function to process the data
const processData = (data) => {
    return new Promise((resolve) => {
        const message = "Processing data: " + data;
        displayOutput(message);
        console.log(message);
        setTimeout(() => {
            const processedData = data * 2;
            resolve(processedData);
        }, 1000);
    });
};

// no.4 Chain the functions: fetch data, then process it
fetchData()
    .then((data) => {
        return processData(data);
    })
    .then((processedData) => {
        const message = "Final processed data: " + processedData;
        displayOutput(message);
        console.log(message);
    })
    .catch((error) => {
        const errorMessage = "An error occurred during fetch/process: " + error;
        displayOutput(errorMessage);
        console.error(errorMessage);
    });
