import { Box, Paper } from "@mui/material"

export default function LessonPaper() {
  return (
    <Box display='flex' gap={2} flexWrap='wrap'>
        <Paper elevation={0} sx={{width:200,height:200}}/>
        <Paper  elevation={1} sx={{width:200,height:200}}/>
        <Paper elevation={2} sx={{width:200,height:200}}/>
        <Paper elevation={3} sx={{width:200,height:200}}/>
        <Paper elevation={4} sx={{width:200,height:200}}/>
        <Paper elevation={5} sx={{width:200,height:200}}/>
        <Paper elevation={6} sx={{width:200,height:200}} variant="outlined"/>
        <Paper elevation={6} sx={{width:200,height:200}} variant="outlined" square/>
    </Box>
    
  )
}
