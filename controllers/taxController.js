const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    let input = {
        monthlySalary: req.query.monthlySalary,
        year: req.query.year
    };

    const response = {
        success: true,
        data: input,
        message: "Tax computed. "
    };

    return res.json(response);
});

module.exports = router;
