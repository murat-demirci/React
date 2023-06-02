import React from 'react'

export default function TestLayout({children}) {
  return (
    <div>
        <h1>Ben test layoutundan geliyorum</h1>
        <div>{children}</div>
    </div>
  )
}
