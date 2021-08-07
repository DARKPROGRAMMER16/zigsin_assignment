import React, { Fragment } from 'react'
import './midsection.css';

const MidSection = () => {
    return (
        <Fragment>
            <div id="midsection" className="d-flex justify-content-center align-items-center">
                <div className="inner-midsection text-center d-flex justify-content-center align-items-center">
                    <div className="innerbox">
                        <h1>The gift of happiness</h1>
                        <p className="my-4">Show your gratitude with one of our gift sets, large and small, specially designed to spread joy to someone you love.</p>
                        <button className="btn btn-outline-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MidSection
