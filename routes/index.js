const express = require("express");
const router = express.Router();

/* GET /

It's useful to have a route which we can request to check the API is running.
Sometimes this is at /health or /check.
*/
router.get("/", (req, res, next) => res.json({ success: true }));

module.exports = router;
