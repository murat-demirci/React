import React from 'react'
import { useState } from 'react'
import useTitle from './useTitle';

export default function TitleOne() {
    const [num, setNum] = useState(0);
    
    useTitle(num);
    
  return (
    <div>
        <button onClick={()=>setNum(num + 1)}>Number - {num}</button>
    </div>
  )
}
