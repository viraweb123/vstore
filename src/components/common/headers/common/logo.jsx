import React from 'react';
import {Link} from 'react-router-dom'

function LogoImage(props) {

    return <Link to={`/`} >
                <img src={`${props.logo}`} alt="" className="img-fluid" />
            </Link>;
}

export default LogoImage;