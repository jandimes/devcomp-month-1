const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const taxService =  require("../services/taxService")(req.query);
    const response = {
        success: true,
        data: taxService.getData()
    };
    return res.json(response);
});

module.exports = router;
