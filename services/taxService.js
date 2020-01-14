const philhealth = require('../configs/philhealthTable');

module.exports = {
    computeMonthlyWithholdingTax: function(input) {
        return 0;
    },

    computeTotalYearlyIncomeTax: function(input) {
        return 0;
    },

    computeSSS: function(input) {
        return 0;
    },

    computePhilhealth: function(input) {
        let year = 
            parseInt(input.year) < 2019 ? 2019 : 
                (parseInt(input.year) > 2024 ? 2024 : input.year) ; 

        let salary = 
            input.monthlySalary <= 10000 ? 10000 : 
                (input.monthlySalary > philhealth[input.year].maxSalary ? philhealth[input.year].maxSalary : input.monthlySalary);
        
        return salary * philhealth[year].rate/2;
    },

    computePagibig: function(input) {
        return 0;
    },

    computeThirteenthMonthPayTax: function(input) {
        return 0;
    }
};
