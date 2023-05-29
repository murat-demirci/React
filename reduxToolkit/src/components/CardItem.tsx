import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../store/features/cardSlice";
import { useAppDispatch } from "../store/store";

interface ParamsType {
  params: {
    item: ItemObject;
    quantity: number;
  };
}

export const CardItem: React.FC<ParamsType> = ({ params }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <ListItem
        sx={{
          maxWidth: 365,
          minWidth: 275,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 365, minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={params.item.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {params.item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <CurrencyLiraIcon sx={{ fontSize: "1rem" }} />
              {params.item.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ margin: "auto", borderRadius: 10 }}>
            <ButtonGroup sx={{marginRight:'auto'}}>
            <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(removeItem({id:params.item.id}))}
            >
              Sil
            </Button>
            </ButtonGroup>
            <ButtonGroup sx={{marginLeft:'auto'}}>
              <Button
                onClick={ () => dispatch(decrementQuantity({id:params.item.id}))}
                size="small"
              >
                -
              </Button>
              <Button
                disabled
                sx={{
                  "&.Mui-disabled": {
                    border: "1px solid rgba(25, 118, 210, 0.5)",
                    color: "primary.dark",
                  },
                }}
              >
                {params.item.quantity}
              </Button>
              <Button
                onClick={() => dispatch(incrementQuantity({id:params.item.id}))}
                size="small"
              >
                +
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </ListItem>
    </>
  );
};
