
export default function getOrderList(customersData, phone) {
    const orderlist = customersData.filter(customers => customers.phone === phone )
    return orderlist

}
