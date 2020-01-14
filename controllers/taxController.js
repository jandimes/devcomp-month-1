const express = require("express");
const taxService = require("../services/taxService");
const router = express.Router();

router.get("/", (req, res) => {
    const input = {
        monthlySalary: parseFloat(req.query.monthlySalary, 10),
        year: parseInt(req.query.year, 10)
    };

    const data = {
        monthlyWithholdingTax: taxService.computeMonthlyWithholdingTax(input),
        totalYearlyIncomeTax: taxService.computeTotalYearlyIncomeTax(input),
        sss: taxService.computeSSS(input),
        philhealth: taxService.computePhilhealth(input),
        pagibig: taxService.computePagibig(input),
        thirteenthMonthPayTax: taxService.computeThirteenthMonthPayTax(input)
    };

    const response = {
        success: true,
        data: data,
        message: "Tax computed. "
    };

    return res.json(response);
});

module.exports = router;
