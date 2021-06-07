const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('');
  const f2 = yield readFile('')
  console.log(f1);
  console.log(f2);
};

let g = gen()
g.next()
g.next()