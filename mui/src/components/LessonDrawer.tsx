import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function LessonDrawer() {
    const [drawer, setdrawer] = useState<boolean>(false)
  return (
    <>
      <IconButton size="large" onClick={()=>setdrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
      anchor="top"
      open={drawer}
      onClose={()=>setdrawer(false)}>
        <Box width={250} height={200} textAlign='center'>
            <Typography component='div' variant="h6">
                Sol panel
            </Typography>
        </Box>
      </Drawer>
    </>
  );
}
