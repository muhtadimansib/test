console.log("Start");

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Task completed!");
        } else {
            reject("Task failed!");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))  // Runs if resolved
    .catch(error => console.log(error));  // Runs if rejected

console.log("End");