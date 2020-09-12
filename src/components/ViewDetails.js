import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize'

function ViewDetails({ customerDetails }) {


    return (
        <Fragment>
            <div id="view_customer_info" className="modal" style={modalStyle}>
                <div className="container">
                    <div className="modal-content">
                        <h4 className="center">Customer Details</h4><hr />

                        <div>
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>name</th>
                                        <th>Phone</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>{customerDetails.date}</td>
                                        <td>{customerDetails.name}</td>
                                        <td>{customerDetails.phone}</td>
                                        <td>{customerDetails.amount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
                <div className="modal-footer">
                    <a href="" className="modal-close waves-effect waves-green btn">Close</a>
                </div>
            </div>
        </Fragment>
    )

}

const modalStyle = {
    width: '50%',
    height: '30%',
}

const mapStateToProps = (state) => {
    return {
        customerDetails: state.customerDetails
    }
}


export default connect(mapStateToProps)(ViewDetails)