import { useState } from "react";
import {
  Stack,
  Box,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

export default function LessonSelect() {
  const [value, setvalue] = useState("");
  const [valueArr, setvalueArr] = useState<string[]>([]);
  return (
    <Stack>
      <Box width={150} marginY={2} marginX="auto">
        <TextField
          label="Ulke seciniz"
          select
          fullWidth
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        >
          <MenuItem value="tr">Turkiye</MenuItem>
          <MenuItem value="usa">ABD</MenuItem>
          <MenuItem value="fr">France</MenuItem>
        </TextField>
      </Box>

      <Box width={150} marginY={2} marginX="auto">
        <Typography textAlign="center" variant="h6" gutterBottom={true}>
          Multi Select
        </Typography>
        <TextField
          SelectProps={{
            multiple: true,
          }}
          label="Ulke seciniz"
          select
          fullWidth
          value={valueArr}
          onChange={(e) =>
            setvalueArr(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
        >
          <MenuItem value="tr">Turkiye</MenuItem>
          <MenuItem value="usa">ABD</MenuItem>
          <MenuItem value="fr">France</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}
