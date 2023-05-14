import {AppBar,Toolbar, Typography} from '@mui/material'
import Cards from './Cards'

export default function Course() {
  return (
    <>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5">
              Cards Project
            </Typography>
          </Toolbar>
        </AppBar>
        <Cards/>
    </>
  )
}
