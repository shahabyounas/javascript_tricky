// Promisify function
const one = (one) => new Promise((resolve, reject) => {
  if(one){
    return resolve(one);
  }else{
    return reject({errCode: 2})
  }
});

const two = (two) =>  new Promise((resolve, reject) => {
  if(two){
    return resolve(two);
  }else{
    return reject({errCode:3});
  }
});

const zero = (x) => new Promise((resolve, reject) => {
  if(x > 20){
     return resolve(x);
  }else{
    return reject({errCode:1})
  }
});

const test = () =>  { 
   return zero("21")     -> Starting with Zero Promise
         .then(one)      -> Manipulate data of zero promise in another Promise(one)
         .then(two)      -> .. so on
         //................. Chain then() functions
}

const errors = {
  1: 'Please provide a value greater than 20',
  2: 'Value of one is undefined',
  3: 'Value of two in undefined'
}

test()
.then(data => console.log("data ",data))
.catch(err =>console.log("err --",errors[err.errCode]));

