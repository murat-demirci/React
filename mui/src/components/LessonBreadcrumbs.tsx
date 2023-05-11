import { Box,Breadcrumbs,Link } from "@mui/material"

export default function LessonBreadcrumbs() {
  return (
    <Box>
        <Breadcrumbs separator='>' maxItems={4}>
            <Link underline="hover">Home</Link>
            <Link underline="hover">Profile</Link>
            <Link underline="none" color='inherit'>Security</Link>
            <Link underline="none" color='inherit'>Security</Link>
            <Link underline="none" color='inherit'>Security</Link>
            <Link underline="none" color='inherit'>Security</Link>
        </Breadcrumbs>
    </Box>
  )
}
