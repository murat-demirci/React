import { useState } from "react";
import {
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Button,
  FormHelperText,
} from "@mui/material";

export default function OrnekRadioGroup() {
    const [value , setvalue] = useState(0);
    const [text,settext]=useState('');
    const [error, seterror] = useState(false);
  return (
    <Stack justifyContent="center" alignItems="center" marginY={2}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        seterror(false);
        if (value === -1) {
            settext('Correct answer!');
        }
        else if(value === 0)
        {
            settext('**Please select an answer');
            seterror(true);
        } else {
            settext('Wrong answer');
        }
      }}>
        <FormControl error={error}>
          <FormLabel sx={{ textAlign: "center" }}>
            Which one is true ?
          </FormLabel>
          <RadioGroup row onChange={(e)=>setvalue(parseInt(e.target.value))}>
            <FormControlLabel label="1+1=4" value={1} control={<Radio color="success"/>} />
            <FormControlLabel label="3*2+4=11" value={2} control={<Radio color="success"/>} />
            <FormControlLabel label="84/2*21=1" value={3} control={<Radio color="success"/>} />
            <FormControlLabel label="2+2=4" value={-1} control={<Radio color="success"/>} />
          </RadioGroup>
          {/* Theme.Provider needed */}
            <FormHelperText >{text}</FormHelperText>
          <Button type="submit" variant="outlined">
            Send
          </Button>
        </FormControl>
      </form>
    </Stack>
  );
}
