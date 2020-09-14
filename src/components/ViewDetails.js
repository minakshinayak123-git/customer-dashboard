import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize'
import getOrderList from '../common/getOrderList'
import getTotalAmount from '../common/getTotalAmount'



function ViewDetails({ customerDetails, customers }) {

    const ordersList = getOrderList(customers, customerDetails.phone)
    
    return (
        <Fragment>
            <div id="view_customer_info" className="modal" style={modalStyle}>
                <div className="container">
                    <div className="modal-content">
                        <h4 className="center">Customer Details</h4><hr />
                        <div>
                            <div className="card">
                                <div className="card-content">
                                    <h6>{customerDetails.name}</h6>
                                    <h6>{customerDetails.phone}</h6>
                                    <h6><b>{`Total amount -  ${getTotalAmount(ordersList)}`}</b></h6>
                                </div>

                            </div>
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ordersList.map(orders => {
                                            return (
                                                <tr key={orders.id}>
                                                    <td>{orders.date}</td>
                                                    <td>{orders.amount}</td>
                                                </tr>

                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn">Close</a>
                </div>
            </div>
        </Fragment>
    )

}

const modalStyle = {
    width: '75%',
    height: '80%',
}

const mapStateToProps = (state) => {
    return {
        customerDetails: state.customerDetails,
        customers: state.customers.customerData
    }
}


export default connect(mapStateToProps)(ViewDetails)