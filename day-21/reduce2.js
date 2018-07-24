const fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf-8').trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((custumers, line) => {
    custumers[line[0]] = custumers[line[0]] || [];
    custumers[line[0]].push({
      name: line[1],
      price: line[2],
      cuantity: line[3]
    });
    return custumers;
  }, {});
  

console.log('output: ',JSON.stringify(output, null, 2));