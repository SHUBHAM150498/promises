setTimeout(() => {
    console.log("This message is shown after 2 seconds");
  }, 2000);

    setTimeout(() => {
    console.log(1);
    setTimeout(() => {
    console.log(2);
    setTimeout(() => {
    console.log(3);
    setTimeout(() => {
    console.log(4);
    setTimeout(() => {
    console.log(5);
    setTimeout(() => {
    console.log(6);
    setTimeout(() => {
    console.log(7);
    }, 1000 * 7);
    }, 1000 * 6);
    }, 1000 * 5);
    }, 1000 * 4);
    }, 1000 * 3);
    }, 1000 * 2);
    }, 1000);

    const timeoutPromise = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));
  
  for (let number = 1; number <= 7; number++)
    timeoutPromise(number * 1000).then(() => console.log(number));
  
  timeoutPromise(1000).then(() => console.log(1)); // prints value after 1 sec
  timeoutPromise(2000).then(() => console.log(2)); // prints value after 2 secs
  timeoutPromise(3000).then(() => console.log(3)); // prints value after 3 secs
  timeoutPromise(4000).then(() => console.log(4)); // prints value after 4 secs
  timeoutPromise(5000).then(() => console.log(5)); // prints value after 5 secs
  timeoutPromise(6000).then(() => console.log(6)); // prints value after 6 secs
  timeoutPromise(7000).then(() => console.log(7)); // prints value after 7 secs

  const p = (opinion) =>
    new Promise((resolve, reject) => {
      if (opinion.toUpperCase() === "YES") resolve("Promise Resolved");
      else reject("Promise Rejected");
    });
  
  p("yes")
    .then((message) => {
      console.log(message); // prints Promise Resolved
    })
    .catch((error) => {
      console.log(error);
    });
  
  p("no")
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error); // prints Promise Rejected
    });

  const numbers = [10, 25, 57];
  const callbackFunc = (n) => console.log(n);
  
  numbers.map(callbackFunc)

  const printMessageTwo = () => {
    setTimeout(() => {
      console.log("Prints this message after 2 secs");
    }, 2000);
  };
  
  const printMessageOne = () => {
    console.log("Function is called");
    printMessageTwo();
    console.log("I'm waiting");
  };
  
  printMessageOne();

  const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 1000);
  });
  
  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("failed");
    }, 1000);
  });
  
  promiseOne.then((status) => {
    console.log(status);
  });
  
  promiseTwo.catch((status) => {
    console.log(status);
  });

  const sleepPromise = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));
    async function sleepyWork() {
    console.log("going to sleep for 1 second");
    await sleepPromise(1000);
    console.log("woke up after 1 second");
  }
  sleepyWork();

  const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First Promise Resolved");
      resolve(10);
    }, 1000);
  });
  
  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second Promise Resolved");
      resolve(20);
    }, 2000);
  });
  
  Promise.all([promiseOne, promiseTwo]).then((results) => {
    const total = results.reduce((previous, current) => previous + current);
  
    console.log(total);
  });