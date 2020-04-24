const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/saved", bookRoutes);

module.exports = router;