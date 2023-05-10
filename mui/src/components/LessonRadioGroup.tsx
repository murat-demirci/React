import { useState } from "react";
import {
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

export default function LessonRadioGroup() {
  const [value, setvalue] = useState(0);
  //uzun yontem
  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>)  =>{
  //     setvalue(parseInt(e.target.value));
  // }
  console.log(value)
  return (
    <div>
      <Stack alignItems="center" marginY={2}>
        <FormControl>
          <FormLabel sx={{ textAlign: "center" }}>Maas Beklentisi</FormLabel>
          <RadioGroup
            row
            name="selected-salary"
            value={value}
            onChange={(e)=>setvalue(parseInt(e.target.value))}
          >
            <FormControlLabel
              label="2000$"
              value={2000}
              color="secondary"
              control={<Radio color="error" />}
            />
            <FormControlLabel
              label="4000$"
              value={4000}
              color="secondary"
              control={<Radio color="secondary" />}
            />
            <FormControlLabel
              label="6000$"
              value={6000}
              color="secondary"
              control={<Radio color="warning" />}
            />
          </RadioGroup>
          <FormHelperText>yanlis secim</FormHelperText>
        </FormControl>
      </Stack>
    </div>
  );
}
