import React, { Fragment } from 'react'
import './buttoncustom.css';

const ButtonCustom = (props) => {
    return (
        <Fragment>
            <button className={`btn btn-custom px-4 ${props.my}`} style={{color:`${props.color}`,backgroundColor:`${props.bg}`,border:`${props.border}`}}>{props.text}</button>
        </Fragment>
    )
}

export default ButtonCustom
