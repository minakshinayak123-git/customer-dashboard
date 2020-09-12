import React, { Fragment } from "react"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <div className="nav-wrapper #a1887f black lighten-2">
                    <Link  to="#" className="brand-logo">Dashboard</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                    {/* <li> <Link to="/Home" className="waves-effect waves-light #62929a cyan darken-1 btn">Home</Link></li> */}
                    <li> <Link to="/Home">Home</Link></li>
                        <li> <Link to="/customer_dashboard">Customer-Dashboard</Link></li>
                       
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <a className="waves-effect waves-light blue btn">Customer-Dashboard</a></li>
               
            </ul>

        </Fragment>

    )
}

export default Navbar
