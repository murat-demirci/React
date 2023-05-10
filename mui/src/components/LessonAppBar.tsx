import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useState } from "react";

export default function LessonAppBar() {
  const [anchorEl, setanchorEl] = useState<HTMLElement | null>(null);
  const openControl = Boolean(anchorEl);
  const handleClose = () => {
    setanchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ floatGrow: 1, marginRight: "auto" }}
          >
            News
          </Typography>
          <Stack direction="row">
            <Button sx={{ marginLeft: "auto" }} color="inherit">
              Login
            </Button>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setanchorEl(e.currentTarget)
              }
              sx={{ marginLeft: "auto" }}
              color="inherit"
            >
              Liste
            </Button>
          </Stack>
          <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
            <MenuItem onClick={handleClose}>Defterler</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
