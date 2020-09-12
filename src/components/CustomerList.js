import React, { Fragment, useState } from 'react'
import ViewDetails from './ViewDetails'
import { connect } from 'react-redux'
import { setCustomerDetails } from '../actions/viewDetailsAction'
import { BsSearch, BsXSquare } from 'react-icons/bs'

function CustomerList(props) {


    const { searchCustomer, unique, handleSearchChange, filteredCustomer } = props
    return (
        <Fragment>
            <h3 className="center" style={{ color: "Maroon", marginBottom: "50px" }}>List All customers data</h3>
            <div className="input-field" style={{ paddingBottom: "50px" }} >
                <input id="search" type="search"
                    value={searchCustomer}
                    onChange={handleSearchChange}
                    required
                />
                <label className="label-icon" htmlFor="search"><BsSearch style={{ color:"#582233", height:"20px", width:"50px"}}>search</BsSearch></label>
                {/* <BsXSquare>close</BsXSquare> */}
            </div>
            {
                props.searchCustomer ? (
                    filteredCustomer.map(customer => {
                        return (
                            <div className="section" key={customer.id}>
                                <h6>{`Customer name - ${customer.name}`}</h6>
                                <h6>{`phone number - ${customer.phone}`}</h6>
                                <div class="right">
                                    <a href='#view_customer_info' className="modal-trigger" onClick={() => props.dispatch(setCustomerDetails(customer))}>view details</a>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                ) :

                    unique?.map(customer => {
                        return (
                            <div className="section" key={customer.id}>
                                <div className="right">
                                    <a href='#view_customer_info' className="modal-trigger" onClick={() => props.dispatch(setCustomerDetails(customer))}>view details</a>
                                </div>
                                <h6>{`Customer name - ${customer.name}`}</h6>
                                <h6>{`phone number - ${customer.phone}`}</h6>
                                <hr />
                            </div>

                        )
                    })
            }

        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        customerDetails: state.customerDetails
    }
}

export default connect(mapStateToProps)(CustomerList)