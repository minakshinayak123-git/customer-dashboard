import React, { useEffect } from 'react';
import Customer from './components/Customer'
import M from 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from './layout/Navbar'
import SideNav from './layout/SideNav'
import Home from './static/Home'
import ViewDetails from './components/ViewDetails'
import { connect } from 'react-redux'
import PdfDownload from './components/PdfDownload'


function App(props) {
  useEffect(() => {
    M.AutoInit()
  })

  return (
    <div>
      <Router>
        {
          Object.keys(props.customerDetails).length != 0 && (
            <ViewDetails />

          )
        }
        <div>
          <Navbar />
          <SideNav />
        </div>

        <Switch>
          <Route path="/Home" component={Home} exact={true}></Route>
          <Route path="/customer_dashboard" component={Customer} exact={true}></Route>
          <Route path="/pdf" component={PdfDownload} exact={true}></Route>
        </Switch>

      </Router>

    </div>


  )
}

const mapStateToProps = (state) => {
  return {
    customerDetails: state.customerDetails
  }
}

export default connect(mapStateToProps)(App);
