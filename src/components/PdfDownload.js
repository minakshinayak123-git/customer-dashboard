import React, { Fragment } from 'react'
import ReactToPdf from 'react-to-pdf'
import CustomerDistributionTable from './CustomerDistributionTable'
import { connect } from 'react-redux'
import BarChart from './BarChart'
import getTotalAmount from '../common/getTotalAmount'

const ref = React.createRef()

function PdfDownload(props) {

    return (
        <Fragment>
            <div className="container">
               <div className="center">
               <div>
                    <ReactToPdf targetRef={ref} filename="dashboard.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="waves-effect waves-light #00acc1 cyan darken-1 btn">Capture as PDF</button>}
                    </ReactToPdf >
                    {/* <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/> */}
                </div>
               <div className="BarChart" ref={ref} options={options} style={{ textAlign: "left", fontSize: "small" }}>
                        <h5>Customer info :</h5>
                        <div style={{ alignContent: "left"}}>
                            <CustomerDistributionTable custOrderCount={props.custOrderCount} />
                        </div>
                        <div>
                            <h6><b>{`Total amount -  ${getTotalAmount(props.customers)}`}</b></h6>
                            <h6><b>{`No of customers orderd once -  ${props.unique.length}`}</b></h6>
                        </div>

                        <div style={{ alignContent: "left", height: "700px", width: "600px" }}>
                            <BarChart monthlyData={props.monthlyData} total={props.customers.length} />
                        </div>
                    </div>
               
               </div>

            </div>

        </Fragment>

    )
}

const options = {
    //orientation: 'portrait',
    //unit: 'in',
    //format: [4, 2],
    borderRadius: "5px",
    width: "600px",
    height: "400px",
    margin: "0 auto",
    padding: "10mm"


};

const mapStateToProps = (state) => {
    return {
        customers: state.customers.customerData,
        unique: state.customers.uniqueCustomerData,
        custOrderCount: state.customers.custOrderCount,
        monthlyData: state.customers.monthlyData
    }
}

export default connect(mapStateToProps)(PdfDownload)
