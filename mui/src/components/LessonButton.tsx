import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';


export default function LessonButton() {
  return (
    <div>
      <Stack spacing={2} direction="column" margin={5}>
        <Button variant="outlined" color="primary">
          buton outline
        </Button>
        <Button variant="text" color="primary">
          buton normal
        </Button>
        <Button variant="contained" color="primary">
          buton contained
        </Button>
      </Stack>

      <Stack spacing={2} direction="row" margin={5}>
        <Button variant="outlined" color="primary">
          buton outline
        </Button>
        <Button variant="text" color="primary">
          buton normal
        </Button>
        <Button variant="contained" color="primary">
          buton contained
        </Button>
      </Stack>

      <Stack spacing={2} direction="column" margin={5}>
        <Button variant="contained" color="primary">
          buton
        </Button>
        <Button variant="contained" color="secondary">
          buton
        </Button>
        <Button variant="contained" color="error">
          buton
        </Button>
        <Button variant="contained" color="warning">
          buton
        </Button>
        <Button variant="contained" color="info">
          buton
        </Button>
        <Button variant="contained" color="success">
          buton
        </Button>
        <Button variant="contained" color="inherit">
          buton
        </Button>
      </Stack>

      <Stack spacing={2} direction="column" margin={5}>
        <Button variant="outlined" color="primary">
          buton
        </Button>
        <Button variant="outlined" color="secondary">
          buton
        </Button>
        <Button variant="outlined" color="error">
          buton
        </Button>
        <Button variant="outlined" color="warning">
          buton
        </Button>
        <Button variant="outlined" color="info">
          buton
        </Button>
        <Button variant="outlined" color="success">
          buton
        </Button>
        <Button variant="outlined" color="inherit">
          buton
        </Button>
      </Stack>

      <Stack spacing={2} direction="column" margin={5}>
        <Button variant="text" color="primary">
          buton
        </Button>
        <Button variant="text" color="secondary">
          buton
        </Button>
        <Button variant="text" color="error">
          buton
        </Button>
        <Button variant="text" color="warning">
          buton
        </Button>
        <Button variant="text" color="info">
          buton
        </Button>
        <Button variant="text" color="success">
          buton
        </Button>
        <Button variant="text" color="inherit">
          buton
        </Button>
      </Stack>

      <Stack direction="row" display="block" spacing={2} textAlign="center">
        <Button variant="outlined" color="primary" size="small">
          Small
        </Button>
        <Button variant="outlined" color="primary" size="medium">
          medium
        </Button>
        <Button variant="outlined" color="primary" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} alignItems='center' direction='column' marginY={2}>
        <AddIcon/>

        <Button variant="contained" startIcon={<AddIcon/>} color="primary">
          Ekle
        </Button>

        <Button variant="contained" endIcon={<AddIcon/>} color="primary">
          Ekle
        </Button>
      </Stack>
    </div>
  );
}
