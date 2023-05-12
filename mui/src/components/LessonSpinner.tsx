import { CircularProgress,LinearProgress } from "@mui/material"
import { useState,useEffect } from "react"

export default function LessonSpinner() {
    const [progress, setprogress] = useState<number>(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setprogress((prevProgress)=>(prevProgress >= 100 ? 0 : prevProgress + 10))
        },800);
        return ()=>{
            clearInterval(timer);
        }
    },[])
  return (
    <>
    <CircularProgress/>
    <CircularProgress color="secondary" variant="determinate" value={25}/>
    <CircularProgress color="success" variant="determinate" value={50}/>
    <CircularProgress color="error" variant="determinate" value={75}/>
    <CircularProgress color="inherit" variant="determinate" value={progress}/>
    
    <LinearProgress sx={{margin:'10px 0'}}/>
    <LinearProgress color="success" variant="determinate" value={progress}/>
    </>
  )
}
