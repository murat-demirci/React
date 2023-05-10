import { Stack, Divider } from "@mui/material";

export default function LessonStack() {
  return (
    <Stack
      justifyContent="center"
      alignItems='center'
      divider={
        <Divider sx={{ borderColor: "red" }} orientation="vertical" flexItem />
      }
      direction={{xs:'column',md:'row'}}

      spacing={{xs:1,sm:2,md:4}}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}
