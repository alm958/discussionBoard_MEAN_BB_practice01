var express = require('express'),
    app = express(),
    path = require('path'),
    port = 8000,
    bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(path.join(__dirname,'./bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./server/config/mongoose_setup');
require('./server/config/routes')(app);

app.listen(port, function(){
    console.log('listening on port', port);
});
