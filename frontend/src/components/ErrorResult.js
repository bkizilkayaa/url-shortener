import React from 'react'
import '../style/ErrorResult.css';

import FailIcon from '../img/fail.png';

const ErrorResult = ({url}) => {
  return (
    <>
    <div className='errorReady'>
        <h2>Supported domains</h2>
        <h4> .com - .org - .tr - .net - .co -
            .io - .ai - .istanbul - .shop - .info </h4>
    </div>
     <div className='error-container'>
        <h3 className='h3-error'> Not a valid url. </h3>
        <img className='errorImg' src={FailIcon} alt='error'/>
   </div>
   </>
  )
}

export default ErrorResult