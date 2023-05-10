import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export default function LessonTextField() {
  const [value, setvalue] = useState("");
  return (
    <div>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <TextField label="ad" />
          <TextField label="outlined" variant="outlined" />
          <TextField label="filled" variant="filled" />
          <TextField label="standart" variant="standard" />
          <TextField
            label="standart"
            variant="outlined"
            size="small"
            color="error"
          />
          <TextField
            label="disable"
            variant="outlined"
            helperText="lutfen isim girniz helpertext"
            type="password"
            disabled
          />
          <TextField
            label="readonly"
            variant="outlined"
            helperText="lutfen isim girniz helpertext"
            type="password"
            inputProps={{ readOnly: true }}
          />
          <TextField
            label="InputAdornment"
            variant="outlined"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">TL</InputAdornment>
              ),
            }}
          />
          <TextField
            label="InputAdornment"
            variant="outlined"
            type="password"
            InputProps={{
              endAdornment: <InputAdornment position="end">TL</InputAdornment>,
            }}
          />
          <TextField
            
            label="sifre"
            variant="outlined"
            type="password"
            helperText={
              !value
                ? "lutfen sifre giriniz"
                : "sifrenizi kimseyle paylasmayiniz"
            }
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
        </Stack>
      </Stack>
    </div>
  );
}
