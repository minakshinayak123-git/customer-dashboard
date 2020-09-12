import React, { Fragment, useState } from 'react'
import parser from 'papaparse'
import { connect } from 'react-redux'
import { setAllCustomers } from '../actions/customersAction'
import { Link } from 'react-router-dom'
import { filteredCustomers } from '../selectors/customerSelector'
import CustomerList from './CustomerList'
import getTotalAmount from '../common/getTotalAmount'
import CustomerDistributionTable from './CustomerDistributionTable'
import PdfDownload from './PdfDownload'
import { BsCloudDownload } from 'react-icons/bs'
import BarChart from './BarChart'


function Customer(props) {

    const [file, setFile] = useState(null)
    const [searchCustomer, setSearchCustomer] = useState(null)

    const onChangeHandler = (e) => {
        const csvFile = e.target.files[0]
        setFile(csvFile)
    }

    const onClickHandler = () => {
        parser.parse(file,
            {
                dynamicTyping: true,
                header: true,
                complete:
                    function (results) {
                        console.log("results", results)
                        console.log("results data", results.data)
                        props.dispatch(setAllCustomers(results.data))

                    }

            });

    }

    const handleSearchChange = (e) => {
        const customerSearch = e.target.value
        console.log("search customer", customerSearch)
        setSearchCustomer(customerSearch)
    }


    let filteredCustomer = filteredCustomers(props.unique, searchCustomer)
    return (

        <Fragment>
            <div className="container">
                <Link className="btn waves-effect blue waves-light" style={{ marginRight: "20px", borderRadius: "10px" }} to="/Home"><i className="arrow_back"></i>Back</Link>
                <Link to="/pdf" className="btn waves-effect blue waves-light"><BsCloudDownload style={{ width: "40px" }}></BsCloudDownload>PDF</Link>
            </div>
            {/* <div className="center">
                <Link to="/pdf" className="btn waves-effect blue waves-light"><BsCloudDownload></BsCloudDownload>PDF</Link>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <header><h3>Upload customer data : </h3></header>
                    </div>
                    <div className="input-field col s6">

                        <input type="file" name="file" className="validate"
                            onChange={(e) => onChangeHandler(e)}
                            placeholder="upload file"
                            style={{ marginBottom: "30px" }} />
                    </div>

                    <button className="btn waves-effect blue waves-light" type="submit" name="action"
                        onClick={onClickHandler}
                        style={{ marginBottom: "20px" }}>Upload customers
                    </button>
                    <div className="right">
                        <div className="card">
                            <div className="card-content">
                                <h6><b>{`Total orders -  ${props.customers.length}`}</b></h6>
                                <h6><b>{`Total amount -  ${getTotalAmount(props.customers)}`}</b></h6>
                                <h6><b>{`No of customers orderd once -  ${props.unique.length}`}</b></h6>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "50px" }}>
                        <CustomerDistributionTable custOrderCount={props.custOrderCount} />
                    </div>

                    <div className="col s12">
                        <BarChart monthlyData={props.monthlyData} total={props.customers.length} />
                    </div>
                </div>
                <div className="col s12">
                <CustomerList searchCustomer={searchCustomer} unique={props.unique} handleSearchChange={handleSearchChange} filteredCustomer={filteredCustomer} />
                </div>
                
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers.customerData,
        unique: state.customers.uniqueCustomerData,
        custOrderCount: state.customers.custOrderCount,
        monthlyData: state.customers.monthlyData
    }
}

export default connect(mapStateToProps)(Customer)