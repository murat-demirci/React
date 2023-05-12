import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export default function LessonDialog() {
  const [isOpen, setisOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setisOpen(true)}
      >
        Open Dialog
      </Button>
      <Dialog open={isOpen} onClose={() => setisOpen(false)}>
        <DialogTitle>Hangisini seviyorsun</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Frontend frameworklerinden hangisini seviyorsun
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setisOpen(false)}>Angular</Button>
            <Button onClick={() => setisOpen(false)}>React JS</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
