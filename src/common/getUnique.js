export default function getUnique(customerListArr, compareName)  {

    const uniqueCustomers = customerListArr.map(customers => customers[compareName])
        // store the indexes of the unique objects
        .map((customer, i, finalData) => finalData.indexOf(customer) === i && i)
        // eliminate the false indexes & return unique objects
        .filter((customerData) => customerListArr[customerData]).map(customers => customerListArr[customers]);
    return uniqueCustomers

    // let unique = customerListArr.filter((customer, i, value) => compareName.indexOf(customer) === i);
    // setUnique(unique)

}