import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/CopyAll";
import ShareIcon from "@mui/icons-material/ShareSharp";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";

export default function LessonSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="spped-dial"
      icon={<SpeedDialIcon openIcon={<EditIcon />}/>}
      
    >
      <SpeedDialAction
        icon={<SaveIcon />}
        tooltipTitle="Save"
        tooltipOpen={true}
      />
      <SpeedDialAction
        icon={<CopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen={true}
      />
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
        tooltipOpen={true}
      />
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
        tooltipOpen={true}
      />
    </SpeedDial>
  );
}
