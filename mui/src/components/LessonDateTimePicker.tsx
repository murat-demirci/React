import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/material";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers";

export default function LessonDateTimePicker() {
  const [value, setvalue] = useState<null | AdapterDayjs>(null);
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            value={value}
            onChange={(newValue) => setvalue(newValue)}
            label="Tarih"
          />
          <TimePicker label="Basic time picker" />
        </DemoContainer>
      </LocalizationProvider>
    </Stack>
  );
}
