import React from 'react'
import {useParams} from 'react-router-dom'

function MemberDetail() {
    const {memberId} = useParams();
  return (
    <div>MemberDetail <p>Params = {memberId}</p></div>
  )
}

export default MemberDetail