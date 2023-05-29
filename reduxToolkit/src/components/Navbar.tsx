import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../store/store";
import {AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
  const quantity = useAppSelector((state) => state.card.quantity);
  return (
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Link
              to="basket"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit">
                <Badge
                  badgeContent={quantity}
                  max={99}
                  color="error"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  showZero={true}
                >
                  <ShoppingCartIcon />
                </Badge>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
  );
}

export default Navbar;
