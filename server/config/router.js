var path = require('path');
var controllerQ = require('../controllers/controllerQ.js');

module.exports = function(app) {
    // app.get('/allplayers', playerControl.playerList)
    app.get('/getUser', controllerQ.getUser);
    app.get('/logout', controllerQ.logout);
    app.get('/getQuestions', controllerQ.getQuestions);
    app.post('/newQuestion', controllerQ.addQuestion);
    app.post('/login', controllerQ.login);
    app.post('/oneQuestion', controllerQ.oneQuestion)
    app.post('/addAnswer', controllerQ.newAnswer)
    app.post('/addLike', controllerQ.addLike)



    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}