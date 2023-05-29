import { Box, Grid } from "@mui/material";

export default function LessonGrid() {
  return (
    <Box>
      <Grid container>
        <Grid xs={12} sm={4}>
          <div>Item 1</div>
        </Grid>
        <Grid xs={12} sm={4}>
          <div>Item 2</div>
        </Grid>
        <Grid xs={12} sm={4}>
          <div>Item 3</div>
        </Grid>
        <Grid xs={12} sm={4}>
          <div>Item 1</div>
        </Grid>
        <Grid xs={12} sm={4}>
          <div>Item 2</div>
        </Grid>
        <Grid xs={12} sm={4}>
          <div>Item 3</div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} sm={4}>
          <div>Item 1</div>
        </Grid>
        <Grid xs={12} sm={4}>
          <div>Item 2</div>
        </Grid>
        <Grid xs={12} sm={4}>
          <div>Item 3</div>
        </Grid>
      </Grid>
    </Box>
  );
}
