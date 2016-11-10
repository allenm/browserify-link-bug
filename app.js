
var createHash = require('sha.js');

var sha256 = createHash('sha256')
var secretId = sha256.update('test', 'utf8').digest('hex');

console.log(secretId);
