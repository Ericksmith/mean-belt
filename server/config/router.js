var path = require('path');
// var playerControl = require('../controllers/team-contrl.js');

module.exports = function(app) {
    // app.get('/allplayers', playerControl.playerList)
    // app.post('/players', playerControl.addPlayer)


    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}