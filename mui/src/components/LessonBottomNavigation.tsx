import { BottomNavigation,BottomNavigationAction } from "@mui/material"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/FavoriteSharp"
import LoactionIcon from "@mui/icons-material/LocationOn"
import { useState } from "react"

export default function LessonBottomNavigation() {
    const [value, setvalue] = useState(0)
  return (
    <BottomNavigation
    showLabels
    value={value}
    sx={{position:'absolute',bottom:0,width:'100%',left:0}}
    onChange={(e,newValue)=>{
        setvalue(newValue);
    }}
    >
        <BottomNavigationAction icon={<RestoreIcon/>} label='Oncekiler'/>
        <BottomNavigationAction icon={<FavoriteIcon/>} label='Favoriler'/>
        <BottomNavigationAction icon={<LoactionIcon/>} label='Konum'/>
    </BottomNavigation>
  )
}
