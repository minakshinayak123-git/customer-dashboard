import getUnique from "../common/getUnique"
import { sampleData } from "../data/sampleData"
import getCustomerDistribution from "../common/getCustomerDistribution"
import { countCustomers } from "../selectors/customerDistributionSelector"
import getAllMonthsData from "../common/getAllMonthsData"
import { countMonthlyData } from "../selectors/customerMonthlyDataSelector"


const initialState = {
    customerData: sampleData,
    uniqueCustomerData: getUnique(sampleData, 'phone'),
    custOrderCount: countCustomers(getCustomerDistribution(sampleData)),
    monthlyData: countMonthlyData(getAllMonthsData(sampleData))
}

const customersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CUSTOMERS': {
            return {...state,
                customerData: action.payload,
                uniqueCustomerData: getUnique(action.payload, 'phone'),
                custOrderCount: countCustomers(getCustomerDistribution(action.payload)),
                monthlyData: countMonthlyData(getAllMonthsData(action.payload))
            }
        }
        default: {
            return state
        }
    }
}

export default customersReducer