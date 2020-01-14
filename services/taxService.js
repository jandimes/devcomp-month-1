const philhealth = require('../configs/philhealthTable');

module.exports = {
    computeMonthlyWithholdingTax: function(input) {
        const taxCategory = this.getWithholdingTaxCategory(input.year, input.monthlySalary);
        return taxCategory.exemption + taxCategory.excessRate * (input.monthlySalary - taxCategory.minSalary);
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
    },



    getWithholdingTaxCategory: function(year, salary) {
        const yearCategories = require("../configs/withholdingTaxTable");
        const yearCategory = yearCategories.find((category) => {
            if (category.minYear === null && year <= category.maxYear) {
                return category;
            } else if (category.maxYear === null && year >= category.minYear) {
                return category;
            } else if (year >= category.minYear && year <= category.maxYear) {
                return category;
            }
        });

        return (yearCategory.categories).find((category) => {
            if (category.minSalary === null && salary <= category.maxSalary) {
                return category;
            } else if (category.maxSalary === null && salary >= category.minSalary) {
                return category;
            } else if (salary >= category.minSalary && salary <= category.maxSalary) {
                return category;
            }
        });
    }
};
