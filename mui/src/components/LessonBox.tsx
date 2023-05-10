import { Box } from "@mui/material";

export default function LessonBox() {
  return (
    <Box
      sx={{
        backgroundColor: "info.dark",
        width: "200px",
        height: "200px",
        color:'white',
        padding:10,
        '&:hover':{
            backgroundColor:'info.light'
        }
      }}
    >
      murat
    </Box>
  );
}
