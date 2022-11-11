import React, { useContext, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    List,
    Modal,
    Paper,
    Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { StyledPaper } from "../styles/TaskList";
import { StyledButton } from "../styles/TaskForm";
import { Context } from "../App";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import CircleIcon from "@mui/icons-material/Circle";

const colors = [
    { primary: "#90caf9", secondary: "#e3f2fd" },
    { primary: "#ce93d8", secondary: "#f3e5f5" },
    { primary: "#f44336", secondary: "#e57373" },
    { primary: "#ffa726", secondary: "#ffb74d" },
    { primary: "#66bb6a", secondary: "#81c784" },
    { primary: "#29b6f6", secondary: "#4fc3f7" },
];

function TaskList({ list, task, listIndex, changeTaskColor }) {
    const [open, setOpen] = useState(false);
    const changeListsTasks = useContext(Context);

    const addNewTask = () => {
        changeListsTasks((oldState) => {
            return oldState.map((item, i) => {
                if (i === listIndex) {
                    return [...item, ""];
                } else return item;
            });
        }, true);
    };

    const setColor = (color) => {
        changeTaskColor(color, listIndex);
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <StyledPaper bgColor={list.bgColor}>
            <Stack direction="column" spacing={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5">{list.title}</Typography>
                    <IconButton onClick={handleOpen}>
                        <SettingsIcon sx={{ color: "#000" }} />
                    </IconButton>
                </Stack>
                {task.map((task, i) => {
                    return <Task task={task} taskIndex={i} listIndex={listIndex} />;
                })}
                <StyledButton onClick={addNewTask}>Add task</StyledButton>
            </Stack>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    Settings
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        {colors.map((color) => {
                            return (
                                <Grid item xs={4} sx={{ textAlign: "center", width: "40px" }}>
                                    <IconButton onClick={() => setColor(color)}>
                                        {color.primary === list.bgColor.primary ? (
                                            <CircleIcon
                                                sx={{
                                                    color: color.primary,
                                                    fontSize: "40px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        ) : (
                                            <CircleTwoToneIcon
                                                sx={{
                                                    color: color.primary,
                                                    fontSize: "40px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                </Grid>
                            );
                        })}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Delete List
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledPaper>
    );
}

export default TaskList;
