import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/InboxRounded";
import DraftsIcons from "@mui/icons-material/DraftsRounded";

export default function LessonList() {
  return (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcons />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
