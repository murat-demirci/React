import React from 'react'

function HakkimizdaLayout({children,...rest}) {
    //console.log('rest: ',rest)
  return (
    <div>
        <h1>HakkimizdaLayout</h1>
        <div>{children}</div>
    </div>
  )
}

export default HakkimizdaLayout