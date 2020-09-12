

export default function getTotalAmount(customersData) {
    const amount = customersData.map(customer => customer.amount)
    const totalAmount = amount.reduce((total, amt) => total + amt, 0)
    return totalAmount

}
