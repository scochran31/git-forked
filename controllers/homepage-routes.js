//FRONT END ROUTES- NEED TO COLLAB WITH JIM FOR HANDLEBARS
const router = require("express").Router();
const { User } = require('../models');
const homepageRoutes = require('./api/user-routes');


router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/restaurants");
    return;
  }
  res.render("homepage", {
    title: "Homepage",
    pageTitle: "Git-Forked"
  });
});


// router.get("/restaurants", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/restaurants");
//     return;
//   }
//   res.render("restaurant");
// });




module.exports = router;
