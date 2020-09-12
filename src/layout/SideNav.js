import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import customerImage from '../images/customer.jpg'
import {BsList} from 'react-icons/bs'


function SideNav() {

    return (
        <Fragment>
            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background" style={{height: '100%', width: '100'}}>
                        <img src={customerImage}  style={{width:"100%",height:"200px",objectFit:"cover"}}/>
                    </div>
                    <a href="#user"></a>
                    <span><h5 className="white-text name"></h5></span>
                    <span><h5 className="white-text email"></h5></span>
                </div></li>
                {/* <li><a href="#!"><i className="material-icons">account_circle</i>Customer</a></li> */}
                <li><a href="#!">Customers Data</a></li>



                <li><div className="divider"></div></li>
                <Link to="/customer_dashboard" className="waves-effect waves-light #00acc1 cyan darken-1 btn">Customer-Dashboard</Link>
                <li><div className="divider"></div></li>
                <Link to="/pdf" className="waves-effect waves-light #00acc1 cyan darken-1 btn">Download-PDF</Link>
                
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><BsList style={{ color:"#582233", height:"50px", width:"50px"}}/></a>
        </Fragment>

    )
}

export default SideNav