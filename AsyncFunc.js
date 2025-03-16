// Simulating multiple tasks
function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Task 1 completed");
        }, 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Task 2 completed");
        }, 1500);
    });
}

async function performTasks() {
    const result1 = await task1(); // Wait for Task 1 to complete
    console.log(result1); // Prints: Task 1 completed
        
    const result2 = await task2(); // Wait for Task 2 to complete
    console.log(result2); // Prints: Task 2 completed
}
performTasks();
