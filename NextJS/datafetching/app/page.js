import React from "react";

//header i degistirmek icin fonk export edilmeli ve layout icerisinde cagirilmali
export const getData = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return res.json();
}

export default async function Home() {
  const data = await getData();
  //console.log(data)
  return (
    <div>Data Fetching</div>
  )
}
