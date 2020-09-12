export const countCustomers = (customers) => {
 
     const orderedOnce = Object.values(customers).filter(cust => cust==1).length
     const orderedTwice = Object.values(customers).filter(cust => cust==2).length
     const orderedThrice = Object.values(customers).filter(cust => cust==3).length
     const orderedFour = Object.values(customers).filter(cust => cust==4).length
     const orderedMoreThanFive = Object.keys(customers).length - parseInt(orderedOnce+orderedTwice+orderedThrice+orderedFour)
    
     const custCount = {orderedOnce, orderedTwice, orderedThrice, orderedFour, orderedMoreThanFive }
     return custCount
}