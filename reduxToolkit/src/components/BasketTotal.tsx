import { Button, Card, CardActions, CardHeader, Paper, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../store/store';
import { clearCard } from "../store/features/cardSlice";

interface IBasketTotal{
    quantity:number;
    total:number;
}

export const BasketTotal:React.FC<IBasketTotal> = ({quantity,total}) => {
    const dispacth = useAppDispatch();
  return (
    <Paper elevation={2} sx={{ width: "100%" }}>
                  <Card>
                    <CardHeader
                      title={
                        <Typography component={"h4"} variant="h6">
                          Toplam
                        </Typography>
                      }
                      subheader={`${quantity} urun ${total} TL`}
                    />
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        color="error"
                        onClick={() => dispacth(clearCard())}
                        variant="contained"
                      >
                        Temizle
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
  )
}
