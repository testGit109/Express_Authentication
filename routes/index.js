var express = require('express');
var router = express.Router();

var Schedule = require("../models/schedule"); // [1]
router.post("/", async function(req, res, next) { // [2]
    let user;
    if (req.body.username != null) {
        user = await Schedule.findOne({
            owner: {
                name: req.body.username,
                password: req.body.password
            }
        }); // [3]
        if (user === null) {
            res.redirect('/register'); // [4]
        }
        res.redirect(`/user/${req.body.username}`);
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.hbs', { title: 'Express' });
});

module.exports = router;