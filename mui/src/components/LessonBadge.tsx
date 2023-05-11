import { Stack,Badge } from "@mui/material"
import MailIcon from '@mui/icons-material/MailLock'

export default function LessonBadge() {
  return (
    <Stack direction='row' justifyContent='center' spacing={2}>
        <Badge badgeContent={50} color="error">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={50} max={40} color="secondary">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={50} color="secondary" anchorOrigin={{
            vertical:'bottom',
            horizontal:'left'
        }}>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}
