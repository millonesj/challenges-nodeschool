var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
function getUrl(url, callback) {
    http.get(url, response => {
        let fullData = "";
        response.setEncoding('utf8');
        response
        .on('data', data => fullData += data)
        .on('end', () => callback(null, fullData))
        .on('error', error => callback(error));
    });
};


getUrl(url1,(err, data) => {
    if (err) console.log(err);
    console.log(data);
    
    getUrl(url2, (err, data) => {
        if (err) console.error(err);        
        console.log(data);
        
        getUrl(url3, (err, data) => {
            if (err) console.error(err);
            console.log(data);
        });
    });
});
