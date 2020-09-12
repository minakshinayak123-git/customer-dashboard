const viewDetailsReducer = (state={}, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER_DETAIL': {
            return action.payload
        }

        default: {
            return state
        }
    }
}

export default viewDetailsReducer