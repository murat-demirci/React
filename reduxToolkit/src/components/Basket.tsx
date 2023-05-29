import {
  Container,
  Divider,
  Grid,
  List,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppSelector } from "../store/store";
import { CardItem } from "./CardItem";
import { BasketHeader } from "./BasketHeader";
import { BasketTotal } from "./BasketTotal";


function Basket() {
  const quantity = useAppSelector((state) => state.card.quantity);
  const total = useAppSelector((state) => state.card.total);
  const items = useAppSelector((state) => state.card.item);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      <Container sx={{ marginY: "2rem" }}>
        {quantity === 0 ? (
          <>
            <BasketHeader quantity={quantity}/>

            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height={"50vh"}
            />
          </>
        ) : (
          <>
            <BasketHeader quantity={quantity} />
            <Grid container>
              <Grid item sm={8}>
                <List
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  {items.map((item, index) => {
                    return (
                      <CardItem
                        key={index}
                        params={{ item: item, quantity: quantity }}
                      />
                    );
                  })}
                </List>
              </Grid>
              <Grid
                item
                sm={1}
                display={"flex"}
                justifyContent={matches ? "center" : "flex-start"}
                alignItems={matches ? "baseline" : "normal"}
                sx={matches ? { width: "inherit" } : { height: "inherit" }}
              >
                <Divider
                  variant="middle"
                  orientation={matches ? "horizontal" : "vertical"}
                  sx={matches ? { width: "100%" } : { height: "100%" }}
                />
              </Grid>
              <Grid
                item
                sm={3}
                marginTop={matches ? 2 : 0}
                sx={{ width: "100%" }}
              >
                <BasketTotal quantity={quantity} total={total}/>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}

export default Basket;
