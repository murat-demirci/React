import "./App.css";
import { AddForm } from "./components/AddForm";
import { Repository } from "./dataAccess/Repository";
import {
  Alert,
  AlertTitle,
  Box,
  Container,
  LinearProgress,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState, Suspense } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Slide, { SlideProps } from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
const LazyCards = React.lazy(() =>
  import("./components/Cards.tsx").then(({ Cards }) => ({ default: Cards }))
);

//globals
declare global {
  type AddValType = {
    id: number | undefined;
    header: string;
    content: string;
  };
}
/////////////////////////
const _repo = new Repository();

function App() {
  //SnackBar Slide
  const [tasks, setTasks] = useState<object | string>({});
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const getAllTasks = async () => {
    const response = await _repo.getAllAsync();
    setTasks(response);
    if (typeof response === "string") {
      return false;
    }
    return true;
  };

  useEffect(() => {
    getAllTasks().then((isSuccess) => {
      setIsSuccess(isSuccess);
    });
  }, []);

  const [state, setState] = useState<{
    onAdd: {
      open: boolean;
      message: string;
    };
    onDelete: {
      open: boolean;
      message: string;
    };
    onError: {
      open: boolean;
    };
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement;
      }
    >;
  }>({
    onAdd: {
      open: false,
      message: "Task added succesfuly!",
    },
    onDelete: {
      open: false,
      message: "Task deleted succesfuly!",
    },
    onError: {
      open: false,
    },
    Transition: Fade,
  });
  function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="down" />;
  }
  const snackbarClose = () => {
    setState({
      ...state,
      onAdd: {
        open: false,
        message: "",
      },
      onDelete: {
        open: false,
        message: "",
      },
      onError: {
        open: false,
      },
    });
  };

  //Add Task
  const addClick = async (vals: AddValType) => {
    const response = await _repo.getAllAsync();
    if (vals.id === undefined) {
      if (Object.keys(response).length !== 0) {
        vals.id =
          Object.values(response).at(Object.values(response).length - 1).id + 1;
      } else {
        vals.id = 1;
      }
    }

    const control = await _repo.addAsync(vals);
    if (control) {
      setState({
        onAdd: {
          open: true,
          message: "Task added succesfuly!",
        },
        onDelete: {
          open: false,
          message: "Task deleted succesfuly!",
        },
        onError: {
          open: false,
        },
        Transition: SlideTransition,
      });
      setTasks([...Object.values(tasks), vals]);
    } else {
      setState({
        onAdd: {
          open: false,
          message: "Task added succesfuly!",
        },
        onDelete: {
          open: false,
          message: "Task deleted succesfuly!",
        },
        onError: {
          open: true,
        },
        Transition: SlideTransition,
      });
    }
  };

  //Delete Task
  const deleteCard = async (id: number) => {
    const control = await _repo.deleteAsync(id);
    console.log(id);
    if (control) {
      setState({
        onAdd: {
          open: false,
          message: "Task added succesfuly!",
        },
        onDelete: {
          open: true,
          message: "Task deleted succesfuly!",
        },
        onError: {
          open: false,
        },
        Transition: SlideTransition,
      });
      const newTasks = Object.values(tasks).filter((task) => {
        return task.id !== id ? task : null;
      });
      console.log(newTasks);
      setTasks(newTasks);
    } else {
      setState({
        onAdd: {
          open: false,
          message: "Task added succesfuly!",
        },
        onDelete: {
          open: false,
          message: "Task deleted succesfuly!",
        },
        onError: {
          open: true,
        },
        Transition: SlideTransition,
      });
    }
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.onAdd.open ? state.onAdd.open : state.onDelete.open}
        autoHideDuration={3000}
        onClose={snackbarClose}
        TransitionComponent={state.Transition}
      >
        <Alert
          variant="filled"
          onClose={snackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          <AlertTitle>SUCCESS</AlertTitle>
          {state.onAdd.open
            ? state.onAdd.message
            : state.onDelete.open
            ? state.onDelete.message
            : ""}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.onError.open}
        autoHideDuration={3000}
        onClose={snackbarClose}
        TransitionComponent={state.Transition}
      >
        <Alert
          variant="filled"
          onClose={snackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          <AlertTitle>ERROR!</AlertTitle>
          An error has been occured
        </Alert>
      </Snackbar>
      <Container>
        <Box width="100%" marginY={5}>
          <AddForm addClick={addClick} />
        </Box>
        <Box width="100%" margin={0}>
          <Suspense
            fallback={
              <>
                <LinearProgress
                  color="inherit"
                  variant="query"
                  sx={{ marginx: "50%",marginTop:'25%' }}
                />
                <br />
                <LinearProgress color="inherit" sx={{ marginx: "50%",marginBottom:'25%' }} />
              </>
            }
          >
            <LazyCards
              isSuccess={isSuccess}
              tasks={tasks}
              deleteCard={deleteCard}
            />
          </Suspense>
        </Box>
      </Container>
    </>
  );
}

export default App;
