import { Stack,Alert,AlertTitle } from "@mui/material"

export default function LessonAlert() {
  return (
    <Stack spacing={2}>
        <Alert>
            alert default
        </Alert>
        <Alert severity="error">
            alert error
        </Alert>
        <Alert severity="info">
            alert info
        </Alert>
        <Alert severity="warning">
            alert warning
        </Alert>
        <Alert>
            <AlertTitle>Alert Title</AlertTitle>
            alert default
        </Alert>
    </Stack>
  )
}
