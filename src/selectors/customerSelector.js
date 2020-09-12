// export const filteredCustomers = (customers, searchCustomer) => {
//     return customers.filter(customer => customer.name.toLowerCase().indexOf(searchCustomer) !== -1
//     || customer.phone.indexOf(searchCustomer) != -1 )
// }


export const filteredCustomers = (customers, searchCustomer) => {
    return customers.filter(customer => customer.name.toLowerCase().indexOf(searchCustomer) !== -1
    )
}


