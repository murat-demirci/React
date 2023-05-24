import {
  Divider,
  Paper,
  Stack,
  CardHeader,
  CardContent,
  Card,
  IconButton,
  Skeleton,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

interface ICards {
  isSuccess: boolean;
  tasks: object | string;
  deleteCard(id: number): void;
}

export const Cards: React.FC<ICards> = ({ isSuccess, tasks, deleteCard }) => {
  function Action(id: number) {
    return (
      <IconButton
        sx={{
          "&:hover": {
            backgroundColor: "error.main",
            color: "white",
            "& .MuiSvgIcon-root.MuiSvgIcon-colorError.MuiSvgIcon-fontSizeMedium.css-1wxstni-MuiSvgIcon-root":
              {
                color: "white",
              },
          },
        }}
        onClick={() => deleteCard(id)}
      >
        <DeleteIcon color="error" />
      </IconButton>
    );
  }
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {isSuccess ? (
          Object.keys(tasks).length !== 0 ? (
            Object.values(tasks).map((task) => (
              <Paper
                key={task.header + task.content + Math.random() * 100}
                sx={{ width: 275, height: 150, maxHeight: 400, margin: 2 }}
                elevation={5}
              >
                <Stack justifyContent="center">
                  <Card>
                    <CardHeader
                      action={Action(task.id)}
                      title={
                        task.header.length >= 20
                          ? task.header.slice(
                              task.header.length - 15,
                              task.header.length
                            ) + "..."
                          : task.header
                      }
                      sx={{ backgroundColor: "#36454F", color: "white" }}
                    />
                    <Divider />
                    <CardContent
                      sx={{
                        lineBreak: "anywhere",
                        overflowY: "auto",
                        maxHeight: 200,
                        padding: 2,
                        height: 50,
                      }}
                    >
                      {task.content}
                    </CardContent>
                  </Card>
                </Stack>
              </Paper>
            ))
          ) : (
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="100%"
              height="50vh"
              sx={{ margin: 0,display:'flex',justifyContent:"center",alignItems:'center',backgroundColor:"inherit" }}
            >
              No Task Found...
            </Skeleton>
          )
        ) : (
          <Paper
            sx={{
              width: "100%",
              backgroundColor: "error.main",
              color: "white",
              textAlign: "center",
            }}
            elevation={2}
          >
            <Stack>
              <CardHeader title={tasks.toString()} />
            </Stack>
            <Divider />
          </Paper>
        )}
      </Stack>
    </>
  );
};
