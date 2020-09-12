var express = require("express");
var router = express.Router();
var Schedule = require("../models/schedule");
router.post("/", async function(req, res, next) {
    const isPasswordConfirmed = req.body.password ===
        req.body.password_repeat;
    if (req.body.username && isPasswordConfirmed) {
        const newUser = new Schedule({
            owner: {
                name: req.body.username,
                password: req.body.password
            }
        }); // [1]
        await newUser.save(); // [2]
        res.redirect(`/user/${newUser.owner.name}`); // [3]
    }
    res.render("register.hbs", { error: { message: "Пароли несовпадают" } });
});
router.get("/", function(req, res, next) {
    res.render("register.hbs");
});
module.exports = router;