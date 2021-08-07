import React, { Fragment } from 'react'
import img1 from '../images/Rectangle 19.png';
import img2 from '../images/Rectangle 19tile1-img-3.png'
import './bottonsection.css'
import ButtonCustom from './ButtonCustom';
const BottomSection = () => {
    return (
        <Fragment>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row row-custom">
                    <div className="col-md-6">
                        <div className="card" style={{width:'28rem'}}>
                            <div className="card-body text-center">
                                <h5 className="card-title my-4">Ready for autumn collection</h5>
                                <p className="card-text mt-5">Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                                <ButtonCustom text="PURCHASE NOW" my="my-4"/>
                            </div>
                            <img src={img2} className="card-img-top" alt="img2"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card" style={{width:'28rem'}}>
                            <div className="card-body text-center">
                                <h5 className="card-title my-4">Ready for autumn collection</h5>
                                <p className="card-text mt-5">Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                                <ButtonCustom text="PURCHASE NOW" my="my-4"/>
                            </div>
                            <img src={img1} className="card-img-top" alt="img2"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BottomSection
