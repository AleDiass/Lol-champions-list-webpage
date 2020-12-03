import React from 'react'
import { Link } from 'react-router-dom'
import {DivError} from './StyleError'
import {bgControl} from '../../Services/BackgroundControl'
import bgError from '../../Assets/error-page.jpg'

const ErrorPage = (props) => {
    React.useEffect(()=>{
        bgControl(bgError)
    },[])

    

    return (
        <DivError>
            <div>
                {props.msg ? <p>{props.msg}</p> : 
                <p>404 Page not Found</p>
                }

                <Link to="/"> Back to Home</Link>
            </div>
        </DivError>
    )
}

export default ErrorPage
