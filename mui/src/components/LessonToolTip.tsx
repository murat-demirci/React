import { Tooltip,IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export default function LessonToolTip() {
  return (
    <>
    <Tooltip title='Delete' placement="right" arrow>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>
    </>
  )
}
