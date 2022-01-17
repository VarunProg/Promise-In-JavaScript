# Promises-In-JavaScript
# What is Promise?
Promise is an object which helps us to do Asynchronous operations in JavaScript. Callbacks functions are also used to do Asynchronous tasks however, Callbacks functions are limited
in terms of functionality and often led to confusion code so promises were introuduced to deal with problems.\
Let's understand promise by analogy.\
A promise in JavaScript is similar to a promise we de in real life, when me make promise so it means we are going to do someting in future. A promise has 2 possible outcomes
it will be fullfilled or either it will be rejected in future when time comes.\
Promise has 3 states.\
Pending- this is the initial state.\
Fullfilled- means promise is resolved.\
Rejected- this happens when opereation was unsuccessful let's suppose some error occured.\
**How Promise works**\
Promise is an object, whenever a new promise is created it takes one function which runs automatically, this function contains the result and it takes 2 parameters resolve and reject. Resolve runs when promise is fullfilled and reject runs if promise is not fullfilled.

Example\
**created new peomise**\
let myPromise = new Promise(function (resolve, reject) {\
    //resolve(); this called when promise is fullfilled;\
    //reject(); this reject is called when promise is not fullfilled like some error occured

})\
\
**if promise is resolved .then() method will will run and if promise is rejected .catch() method will run.**

let myPromise = new Promise(function (resolve, reject) { \
    const x = 1;\
    const y = 1;\
    if (x === y) {\
        resolve();\
    } else {\
        reject();\
    }\
});\
myPromise.then(function () {\
    console.log('Success, Promise is resolved');\
}).catch(function () {\
    console.log('Some error has occurred');\
}); 
\
output: Success, Promise is resolved

whatever comes inside the .then() that is resolved code and whatever comes inside the .catch() that is rejected code.
