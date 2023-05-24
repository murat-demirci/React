import {
  Stack,
  Paper,
  TextField,
  TextFieldProps,
  styled,
  ButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import React, {  useState } from "react";
import { TextHelper } from "../helpers/textHelper";
import {  SnackbarProvider, useSnackbar } from "notistack";

const TextFieldStyled = styled(TextField)<TextFieldProps>(() => ({
  //default
  "& .MuiFormHelperText-root": {
    color: "#e57373",
  },
  "& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root,& .MuiInputBase-root": {
    fontWeight: "bolder",
    fontSize: 18,
  },
  color: "white",
  "& .MuiInputLabel-root": {
    color: "dark",
    fontStyle: "italic",
    width: "100%",
  },
  "& .MuiInputBase-input": {
    maxHeight: "1.5rem",
  },
  "& .MuiInputBase-inputMultiline": {
    maxHeight: "5rem",
  },
  //hover
  "&:hover": {
    fontSize: 20,
    fontWeight: "normal",
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-root": {
      backgroundColor: "#F26E01",
      color: "white",
      fontSize: 20,
    },
  },

  //focus
  "& :focus , & .MuiInputBase-root.Mui-focused": {
    color: "#F0FFF0",
    fontSize: 20,
    fontWeight: "normal",
    backgroundColor: "#F26E01",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "white",
  },
  "& .MuiInputBase-root:after": {
    borderColor: "black",
    boxShadow: "0 0 1px 1px black",
  },
}));

interface addClickProps {
  addClick: (vals: AddValType) => void;
}
type HelperTextType = {
  header: boolean;
  content: boolean;
};

export const AddForm: React.FC<addClickProps> = ({ addClick }) => {
  //Add Check
  const [header, setHeader] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [helperText, setHelperText] = useState<HelperTextType>({
    header: false,
    content: false,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SnackbarCloseButton({ snacbarKey }:any) {
    const { closeSnackbar } = useSnackbar();
    return (
      <React.Fragment>
        <IconButton
          sx={{ color: "white" }}
          size="small"
          onClick={() => closeSnackbar(snacbarKey)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  }
  function MyApp() {
    const { enqueueSnackbar } = useSnackbar();
    const handleClick = () => {
      const newHeader = TextHelper.RemoveWhiteSpace(header);
      const newContent = TextHelper.RemoveWhiteSpace(content);

      if (
        newHeader !== "" &&
        newHeader !== " " &&
        newContent !== "" &&
        newContent !== " "
      ) {
        //success processs
        const val: AddValType = {
          id:undefined,
          header: newHeader,
          content: newContent,
        };
        addClick(val);
        setHeader("");
        setContent("");
        setHelperText({ header: false, content: false });
        //success processs
      } else if (
        (newHeader === "" || newHeader === " ") &&
        (newContent === "" || newContent === " ")
      ) {
        enqueueSnackbar(" Please enter a TASK name", {
          variant: "error",
        });
        enqueueSnackbar(" Please enter a CONTENT", {
          variant: "error",
        });
        setHelperText({ header: true, content: true });
      } else if (newHeader === "" || newHeader === " ") {
        enqueueSnackbar(" Please enter a TASK name\n", { variant: "error" });
        setHelperText({ header: true, content: false });
      } else if (newContent === "" || newContent === " ") {
        enqueueSnackbar(" Please enter a CONTENT\n", { variant: "error" });
        setHelperText({ header: false, content: true });
      }
    };

    return (
      <React.Fragment>
        <Button onClick={handleClick} startIcon={<AddIcon color="success" />}>
          Add New Job
        </Button>
      </React.Fragment>
    );
  }

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        width="50%"
        margin="auto"
      >
        <Paper elevation={5} sx={{ width: "100%", padding: 2 }}>
          <Stack spacing={2}>
            <TextFieldStyled
              fullWidth={true}
              id="header"
              autoComplete="off"
              variant="filled"
              label="Name"
              value={header}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setHeader(e.target.value);
              }}
              helperText={helperText.header ? "*Please enter a TASK name" : ""}
              error={helperText.header}
            />
            <TextFieldStyled
              fullWidth={true}
              id="content"
              autoComplete="off"
              variant="filled"
              label="Content"
              maxRows={5}
              multiline
              value={content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setContent(e.target.value);
              }}
              helperText={helperText.content ? "*Please enter a CONTENT" : ""}
              error={helperText.content}
            />
            <SnackbarProvider
              maxSnack={4}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              autoHideDuration={3000}
              TransitionProps={{ direction: "up" }}
              action={(snacbarKey) => (
                <SnackbarCloseButton snacbarKey={snacbarKey} />
              )}
            >
              <ButtonGroup
                sx={{
                  "&:hover": {
                    backgroundColor: "success.light",
                    "& .MuiButtonBase-root,& .MuiSvgIcon-root.MuiSvgIcon-colorSuccess.MuiSvgIcon-fontSizeMedium.css-4b67si-MuiSvgIcon-root":
                      {
                        color: "white",
                      },
                  },
                }}
                color="success"
                fullWidth
                variant="text"
                size="large"
              >
                <MyApp />
              </ButtonGroup>
            </SnackbarProvider>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};
