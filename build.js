
var fs = require('fs');
var path = require('path');
var browserify = require('browserify');


var b = browserify(path.join(__dirname, './app.js'), {
    paths:[
        path.join(__dirname, 'node_modules')
    ]
})

var destFilePath = path.join(__dirname, 'app.out.js')
var destFile = fs.createWriteStream(destFilePath);

b.bundle().pipe(destFile);
