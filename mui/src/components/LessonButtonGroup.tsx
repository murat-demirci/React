import ButtonGroup from "@mui/material/ButtonGroup";
import { Button, Stack } from "@mui/material";

export default function LessonButtonGroup() {
  return (
    <div>
      <Stack spacing={3} justifyContent="center" direction="row">
        <ButtonGroup variant="contained" color="primary" aria-label="">
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
          <Button>Button4</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={3} justifyContent="center" direction="row" marginY={2}>
        <ButtonGroup variant="outlined" color="primary" aria-label="">
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
          <Button>Button4</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={3} justifyContent="center" direction="row">
        <ButtonGroup variant="text" color="primary" aria-label="">
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
          <Button>Button4</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={3} justifyContent="center" direction="row">
        <ButtonGroup
          variant="text"
          color="error"
          aria-label=""
          orientation="vertical"
          size="small"
        >
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
          <Button>Button4</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
}
