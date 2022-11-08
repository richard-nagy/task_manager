import { Button, Fab, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../App";
// import MuiFab from "../styles/common/Fab";
// import { ContainerPaper } from "../styles/common/Paper";
// import { ResponsiveStack } from "../styles/common/Stack";

function TaskForm({ listIndex }) {
    const [newTask, setNewTask] = useState("");
    const [addNewTask, setAddNewTask] = useState(false);

    const changeListsTasks = useContext(Context);

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleClickSubmit = () => {
        changeListsTasks("add", null, listIndex, newTask);
        setNewTask("");
        setAddNewTask(false);
    };

    const handleClickCancel = () => {
        setNewTask("");
        setAddNewTask(false);
    };

    if (!addNewTask) {
        return (
            <Button
                onClick={() => {
                    setAddNewTask(true);
                }}
            >
                +
            </Button>
        );
    }

    return (
        <Paper>
            <form onSubmit={handleClickSubmit}>
                <Stack direction="row">
                    <TextField label="New task..." value={newTask} onChange={handleChange} />
                    <Fab tooltip="Add" color="primary" onClick={handleClickSubmit}>
                        <AddIcon />
                    </Fab>
                    <Fab tooltip="Add" color="error" onClick={handleClickCancel}>
                        <CloseIcon />
                    </Fab>
                </Stack>
            </form>
        </Paper>
    );
}

export default TaskForm;
