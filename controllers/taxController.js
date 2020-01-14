const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.json({
        success: true,
        data: {},
        message: "Tax computed. "
    });
});

module.exports = router;
