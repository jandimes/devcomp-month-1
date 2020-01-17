const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const taxService =  require("../services/taxService")(req.query);
    return res.send(taxService.getData());
});

module.exports = router;
