import { Chip, Divider, Typography } from '@mui/material'
import React from 'react';

interface IBasketHeader{
    quantity:number;
}

export const BasketHeader:React.FC<IBasketHeader> = ({quantity}) => {
  return (
    <Typography
              component={"div"}
              variant="h4"
              gutterBottom
              color={"inherit"}
              align="left"
            >
              Sepet
              <Chip
                variant="outlined"
                color="warning"
                sx={{ height: "1rem", marginX: 1 }}
                label={quantity === 0 ? "Bos" : quantity}
              />
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "inherit" }}
              />
            </Typography>
  )
}
