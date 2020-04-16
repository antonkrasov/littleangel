import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import NeedHelpProblemDescriptionPage from './components/NeedHelpProblemDescriptionPage'
import NeedHelpEnterAdressPage from './components/NeedHelpEnterAdressPage'
import NeedHelpSignUpPage from './components/NeedHelpSignUpPage'
import NeedHelpVerificationCodePage from './components/NeedHelpVerificationCodePage'
import NeedHelpDonePage from './components/NeedHelpDonePage'
import CanHelpDescribeYourselfPage from './components/CanHelpDescribeYourselfPage'
import CanHelpSignUpPage from './components/CanHelpSignUpPage'
import CanHelpVerificationCodePage from './components/CanHelpVerificationCodePage'
import CanHelpAdressPage from './components/CanHelpAdressPage'
import CanHelpDonePage from './components/CanHelpDonePage'

import './App.css';

import SimpleMap from './components/SimpleMap'

import {
  ROUTE_WELCOME,

  ROUTE_NEED_HELP_PROBLEM_DESCRIPTION,
  ROUTE_NEED_HELP_ENTER_ADRESS,
  ROUTE_NEED_HELP_SIGN_UP,
  ROUTE_NEED_HELP_VERIFICATION_CODE,
  ROUTE_NEED_HELP_DONE,

  ROUTE_CAN_HELP_DESCRIBE_YOURSELF,
  ROUTE_CAN_HELP_SIGN_UP,
  ROUTE_CAN_HELP_VERIFICATION_CODE,
  ROUTE_CAN_HELP_ADRESS,
  ROUTE_CAN_HELP_DONE,
} from './routes'

function App() {
  return (
    <div className="root-app-container">

      <SimpleMap />

      <div className="root-app-maps-overlay">
        <div className="container h-100">

          <div className="row align-items-end h-100">

            <div className="col-lg-6 offset-lg-3 mb-2">

              <BrowserRouter>

                <Switch>

                  <Route path={ROUTE_WELCOME} component={WelcomePage} exact />
                  <Route path={ROUTE_NEED_HELP_PROBLEM_DESCRIPTION} component={NeedHelpProblemDescriptionPage} />
                  <Route path={ROUTE_NEED_HELP_ENTER_ADRESS} component={NeedHelpEnterAdressPage} />
                  <Route path={ROUTE_NEED_HELP_SIGN_UP} component={NeedHelpSignUpPage} />
                  <Route path={ROUTE_NEED_HELP_VERIFICATION_CODE} component={NeedHelpVerificationCodePage} />
                  <Route path={ROUTE_NEED_HELP_DONE} component={NeedHelpDonePage} />
                  <Route path={ROUTE_CAN_HELP_DESCRIBE_YOURSELF} component={CanHelpDescribeYourselfPage} />
                  <Route path={ROUTE_CAN_HELP_SIGN_UP} component={CanHelpSignUpPage} />
                  <Route path={ROUTE_CAN_HELP_VERIFICATION_CODE} component={CanHelpVerificationCodePage} />
                  <Route path={ROUTE_CAN_HELP_ADRESS} component={CanHelpAdressPage} />
                  <Route path={ROUTE_CAN_HELP_DONE} component={CanHelpDonePage} />

                </Switch>

              </BrowserRouter>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
