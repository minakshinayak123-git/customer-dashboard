export default function getCustomerDistribution(customersData)  {
        const phone = customersData.map(customer => customer.phone)
        //const distArr = []
        const count = phone.reduce((totalCount, ph) => (totalCount[ph] = ++totalCount[ph] || 1, totalCount), {})
        return count
}