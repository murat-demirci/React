import { Link, Box } from "@mui/material";

export default function LessonLink() {
  return (
    <Box display="flex" gap={1}>
      <Link href="https://mui.com/material-ui/react-link/">Home</Link>
      <Link color="error" href="https://mui.com/material-ui/react-link/">
        Home
      </Link>
      <Link variant="body2" href="https://mui.com/material-ui/react-link/">
        Home
      </Link>
      <Link underline="none" href="https://mui.com/material-ui/react-link/">
        Home
      </Link>
      <Link underline="hover" href="https://mui.com/material-ui/react-link/">
        HomeHover
      </Link>
      <Link
        component="button"
        underline="hover"
        onClick={() => alert("clicked")}
      >
        HomeButton
      </Link>
    </Box>
  );
}
