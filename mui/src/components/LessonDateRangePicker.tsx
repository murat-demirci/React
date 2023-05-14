import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export const LessonDateRangePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} />
    </LocalizationProvider>
  );
};
