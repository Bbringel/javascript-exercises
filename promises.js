//CodeCademy 1st exercise:

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

const orderSunglasses = () => {
  return new Promise (myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);


// Promises then & catch:

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Sucess')'
  } else {
    reject('Failed')
  }
})

p.then((message) => {
  console.log('This is in the then ' + message)
}).catch((message) => {
  console.log('This is int he catch ' + message)
})

// Promises all & race:

const cookLasagnaOne = new Promise ((resolve, reject) => {
  resolve('Lasagna One Done')  
})

const cookLasagnaTwo = new Promise ((resolve, reject) => {
  resolve('Lasagna Two Done')  
})

const cookLasagnaThree = new Promise ((resolve, reject) => {
  resolve('Lasagna Three Done')  
})

// Everything printed in the console:
Promise.all([
    cookLasagnaOne,
    cookLasagnaTwo,
    cookLasagnaThree
]).then((messages) => {
  console.log(messages)
})

// The 1st one to be resolved printed in the console:
Promise.race([
    cookLasagnaOne,
    cookLasagnaTwo,
    cookLasagnaThree
]).then((messages) => {
  console.log(messages)
})



















