var express = require('express');
var router = express.Router();
var Schedule = require("../models/schedule");

router.param("owner", async function(req, res, next, owner) {
    // [1]
    try {
        // [2]
        const User = await Schedule.findOne({ "owner.name": owner });
        if (User) {
            req.owner = User; // [3]
            next();
        } else {
            next(createError(403));
        }
    } catch (error) {
        next(error);
    }
});

/* GET users listing. */
router.get("/:owner", function(req, res, next) {
    res.render("user.hbs", { user: req.owner });
});

module.exports = router;