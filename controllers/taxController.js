const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const input = {
        monthlySalary: req.query.monthlySalary,
        year: req.query.year
    };

    const data = {
        monthlyWithholdingTax: computeMonthlyWithholdingTax(input),
        totalYearlyIncomeTax: computeTotalYearlyIncomeTax(input),
        sss: computeSSS(input),
        philhealth: computePhilhealth(input),
        pagibig: computePagibig(input),
        thirteenthMonthPayTax: computeThirteenthMonthPayTax(input)
    };

    const response = {
        success: true,
        data: data,
        message: "Tax computed. "
    };

    return res.json(response);
});



function computeMonthlyWithholdingTax(input) {
    return 0;
}

function computeTotalYearlyIncomeTax(input) {
    return 0;
}

function computeSSS(input) {
    return 0;
}

function computePhilhealth(input) {
    return 0;
}

function computePagibig(input) {
    return 0;
}

function computeThirteenthMonthPayTax(input) {
    return 0;
}

module.exports = router;
