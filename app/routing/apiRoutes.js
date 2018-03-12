var friendData = require('../data/friends.js');
var questionData = ["do you like cake? ", "do you like beer? ", "do you like dancing? "];

module.exports = function (app) {

    app.get('/surveyResults', function (req, res) {
        console.log("here now");
        res.json(friendData);
    });

    app.get('/api/survey', function (req, res) {
        console.log("/api/survey now");
        res.json(questionData);
    }); 

    app.get('/api/waitlist', function (req, res) {
        //res.json(waitingListData);
    });

/*     app.post('/api/tables', function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitingListData.push(req.body);
            res.json(false);
        }
    }); */


        //console.log(tableData);
        //console.log(waitingListData);
    

}