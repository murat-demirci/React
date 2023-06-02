import React from 'react'
import {notFound} from 'next/navigation'

export default function Blog({searchParams}) {
    //console.log(props)

    //error.jsx icin serachParams ekle
    // if (searchParams.error ==='true') {
    //   throw new Error('This is an error')
    // }

    //notfound icin
    if (searchParams.test ==='true') {
      notFound();
    }
  return (
    <div>Blog Page</div>
  )
}
