import React, { Fragment } from 'react'
import img1 from '../images/Rectangle 19.png';
import img2 from '../images/Rectangle 19tile1-img-3.png'
import './bottonsection.css'
const BottomSection = () => {
    return (
        <Fragment>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row row-custom">
                    <div className="col-md-6">
                        <div class="card" style={{width:'28rem'}}>
                            <div class="card-body text-center">
                                <h5 class="card-title my-4">Ready for autumn collection</h5>
                                <p class="card-text my-5">Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <img src={img2} class="card-img-top" alt="img2"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card" style={{width:'28rem'}}>
                            <div class="card-body text-center">
                                <h5 class="card-title my-4">Ready for autumn collection</h5>
                                <p class="card-text my-5">Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <img src={img1} class="card-img-top" alt="img2"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BottomSection
