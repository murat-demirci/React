'use client'
import React, { useEffect } from 'react'

//Burasi CSR. Button componentini SSR olarak dahil etmek icin
function Input({children}) {
    useEffect(()=>{console.log('input'),[]})
  return (
    <div>Input
        {children}
    </div>
  )
}

export default Input