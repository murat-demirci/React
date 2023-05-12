import { Stack } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import { useState } from "react"

export default function LessonLoadingButton() {
  const [value, setvalue] = useState(false)
  return (
    <Stack>
      <LoadingButton loading>Kaydet</LoadingButton>
      <LoadingButton loading variant="outlined">Kaydet</LoadingButton>
      <LoadingButton loading={value} variant="contained" onClick={()=>setvalue(true)}>Kaydet</LoadingButton>
      </Stack>
  )
}
