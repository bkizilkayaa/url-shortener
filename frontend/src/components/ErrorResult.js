import React from 'react'
import '../style/ErrorResult.css';

const ErrorResult = ({url}) => {
  return (
    <div className='urlReady'>
        <h2>Supported domains</h2>
        <h4> .com - .org - .tr - .net - .co -
            .io - .ai - .istanbul - .shop - .info</h4>
    </div>
  )
}

export default ErrorResult