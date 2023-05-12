import {
  Button,
  Snackbar,
  IconButton,
  Slide,
  SlideProps,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function LessonSnackbar() {
  const [state, setstate] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & { children: React.ReactElement<any, any> }
    >;
  }>({ open: false, Transition: Fade });
  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setstate({
      ...state,
      open: false,
    });
  };
  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement;
        }
      >
    ) =>
    () => {
      setstate({
        open: true,
        Transition,
      });
    };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Undo
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Button onClick={handleClick(SlideTransition)}>Open Snackbar</Button>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={action}
        message={"Snackbar trigged"}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
      />
    </>
  );
}
