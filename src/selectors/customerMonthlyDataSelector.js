export const countMonthlyData = (customers) => {

    const monthlyData = Object.keys(customers).map(key => [key, customers[key]])
    return monthlyData

}