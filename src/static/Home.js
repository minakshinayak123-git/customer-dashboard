import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import customerImage from '../images/customer.jpg'


function Home(props) {
    

    return (
        <div className="container">
            
            <div className="row">
                <div className="col s10 m10">
                    <div className="card">
                        <div className="card-image">
                        <img src={customerImage}/>
                          
                        </div>
                        <div className="card-content">
                        <Link to="/customer_dashboard" style={{fontSize: "50px"}}> CUSTOMER DASHBOARD</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}





export default Home
