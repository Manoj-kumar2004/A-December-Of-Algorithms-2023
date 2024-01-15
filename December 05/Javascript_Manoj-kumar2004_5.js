function totalAmountStolenByAboveAverage(amounts) {
    const averageAmount = amounts.reduce((sum, amount) => sum + amount, 0) / amounts.length;
    const aboveAverageThieves = amounts.filter(amount => amount >= averageAmount);
    const totalStolenByAboveAverage = aboveAverageThieves.reduce((sum, amount) => sum + amount, 0);
    return totalStolenByAboveAverage;
}
const amountsStolen = [10, 20, 30, 40, 50] ;
const totalStolen = totalAmountStolenByAboveAverage(amountsStolen);
console.log("Total amount stolen by above-average thieves:", totalStolen);
