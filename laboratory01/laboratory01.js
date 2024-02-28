function isOdd(number) {
    return new Promise((resolve, reject) => {
      if (number % 2 !== 0) {
        resolve(true); 
      } else {
        reject(false); 
      }
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
  async function numberChecker() {
    for (let number of numbers) {
      try {
        await isOdd(number);
        console.log(`${number} is odd.`);
      } catch (error) {
  
      }
    }
  }
  
  numberChecker();
  
  function getRandomCharacter() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        resolve(randomCharacter);
      }, 500);
    });
  }
  
  async function resolve() {
    const randomCharacter = await getRandomCharacter();
    console.log("Random character:", randomCharacter);
  }
  
  resolve();
  
  
  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error: Data could not be retrieved.");
      }, 500);
    });
  }
  
  async function reject() {
    try {
      await getData();
    } catch (error) {
      console.log(error);
    }
  }
  
  reject();
  
  function rejectResolve() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error: Operation failed.");
      }, 500);
      setTimeout(() => {
        resolve("Success: Operation completed.");
      }, 1000);
    });
  }
  
  async function rejectAndResolve() {
    try {
      const result1 = await rejectResolve();
      console.log(result1);
    } catch (error) {
      console.log(error);
    }
  }
  
  rejectAndResolve();
  