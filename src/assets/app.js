const fs = require('fs')

var data = require('./wordlist.json');


var filtered = data.filter(e => e.length == 6);



fs.writeFileSync('6length.json', JSON.stringify(filtered));

