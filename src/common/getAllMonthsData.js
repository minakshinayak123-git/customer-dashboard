export default function getAllMonthsData(customersData) {

    const date = customersData.map(customer => customer.date)
    const allMonthsData = date.reduce((totalCount, dt) => (totalCount[dt] = ++totalCount[dt] || 1, totalCount), {})
    return allMonthsData
}

