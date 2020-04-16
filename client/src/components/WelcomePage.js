import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
    ROUTE_NEED_HELP_PROBLEM_DESCRIPTION
} from '../routes'

const WelcomePage = () => {

    const history = useHistory();

    const onNeedHelpClickHandler = () => {
        history.push(ROUTE_NEED_HELP_PROBLEM_DESCRIPTION)
    }

    const [collapse, setCollapse] = useState(false)
    const onToggleWindowClick = () => {
        setCollapse(!collapse)
    }

    return (
        <div className="bottom-card-container buttons-wrapper">
            {
                !collapse && <div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="/img/smiling_face_with_halo.png" alt="" width="48" height="48" />
                        <h3 className="ml-4">VanAngel.ca</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <h5 className="">Get help and help others</h5>
                    </div>
                    <p>
                        During these desperate times, lots of people may need help, here you can find these people and help them, or if you are one of them call for help. This can be anything, like grocery shopping, dog walking or even talk to someone :)
                        <br /><br />
                        <b>We are 100% non-commercial, free service.</b>
                        <br /><br />
                        The site is still under development if you have feedback, questions, please fill free to drop me a line at <a href="mailto:anton.krasov@gmail.com">anton.krasov@gmail.com</a>.
                        <br /><br />
                        Mobile apps are in development and would be ready really soon.
                    </p>
                    <button
                        className="btn btn-primary btn-block btn-success"
                    >
                        I can help
                    </button>
                    <button
                        className="btn btn-primary btn-block btn-warning"
                        onClick={onNeedHelpClickHandler}
                    >
                        I need help
                    </button>
                </div>
            }
            <button
                className={`btn btn-primary btn-block ${!collapse ? "mt-2" : ""}`}
                onClick={onToggleWindowClick}
            >
                {
                    !collapse && <span>Show me the map</span>
                }
                {
                    collapse && <span>Show welcome message</span>
                }
            </button>
        </div>
    )
}
export default WelcomePage