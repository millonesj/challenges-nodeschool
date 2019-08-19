var mymodule = require('./mymodule');
var path = process.argv[2];
var ext = process.argv[3];
mymodule(path, ext, (err, data) => {
    if (err) { 
        console.log("Ocurrio un error" + err);
    } else {
        data.forEach(file => {
            console.log(file);
        });
    }
});
