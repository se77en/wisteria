'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'wisteria' };
        
        res.render('index', model);
        
    });

};
