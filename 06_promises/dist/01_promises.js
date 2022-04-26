var go = function (isworking) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isworking) {
                resolve('a string');
            }
            else {
                reject(new Error('it broke'));
            }
        }, 200); // wait a moment
    });
};
// exercise the code
go(false) // promises are 'thenable'
    .then(function (val) { console.log(val); })["catch"](function (err) { console.log(err); }); // typing gives use code completion
