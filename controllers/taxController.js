const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    
    const input = {
        monthlySalary: parseFloat(req.query.monthlySalary, 10),
        year: parseInt(req.query.year, 10)
    };

    const taxService =  require("../services/taxService")(input);

    const response = {
        success: true,
        data: taxService.getData(),
        message: "Tax computed. "
    };

    return res.json(response);
});

module.exports = router;
