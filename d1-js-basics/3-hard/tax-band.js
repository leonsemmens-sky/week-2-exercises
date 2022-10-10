/* 
The provided function will be tested using multiple salarys.  Inside the function code-block, 
your challenge is to write the logic to calculate the amount of take-home pay after taxes have
been deducted.
Here are the tax bands. Rates are marginal.  Marginal bands mean you only pay the specified tax rate on that portion of salary. 
For example, if your salary puts you in the 40% tax bracket, then you only pay 40% tax on the segment of earnings in that income tax band. 
For the lower part of your earnings, you'll still pay the appropriate 20% or 0%.

Example £15,000.00 =>  £12,570.00 isn't taxed, then the remaining £2,430.00 is taxed at 20%

||------------------------------||------------||
||   Tax Band                   ||   Tax Rate ||
||------------------------------||------------||
||   £0         => £12,570.00   ||     0%     ||
||   £12,570.01 => £50,270.00   ||    20%     ||
||   £50,270.01 => £150,000.00  ||    40%     ||
||   £150,000.01 => To the moon!||    45%     ||
||============================================||
*/

const tax = [[150000, 0.55], [50270, 0.6], [12570, 0.8]]

function taxBand(salary) {
    salary = Math.max(0, salary)

    let income = 0
    let taxed = 0
    for (const [limit, rate] of tax) {
        if (!(salary > limit)) continue;
        const toTax = salary - limit - taxed
        taxed += toTax
        income += toTax * rate
    }

    income += salary - taxed
    return Math.round(income * 100) / 100
}

// console.log(taxBand(51000))

module.exports = { taxBand };
