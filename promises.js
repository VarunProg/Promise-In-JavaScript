// promises

//whenever promise created it takes one function which runs automatically and this function contains the result
// promises functuon takes two paramerets which is resolve or reject
let myPromise = new Promise(function (resolve, reject) {
    //resolve(); this called when promise is fullfilled;
    //reject(); this reject is called when promise is not fullfilled like some error occured

})

//Example of promise
var promise = new Promise(function (resolve, reject) {
    const x = 1;
    const y = 1;
    if (x === y) {
        resolve();
    } else {
        reject();
    }
    )};
promise.then(function () {
    console.log('Success, Promise is resolved');
})
