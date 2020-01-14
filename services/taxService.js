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
        let salary = input.monthlySalary <= 10000 ? 10000 : input.monthlySalary;
        
        salary = salary > philhealth[input.year].maxSalary ? philhealth[input.year].maxSalary : salary;
        
        return salary * philhealth[input.year].rate/2;
    },

    computePagibig: function(input) {
        return 0;
    },

    computeThirteenthMonthPayTax: function(input) {
        return 0;
    }
};
