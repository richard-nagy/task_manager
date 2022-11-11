import { Button, Fab, IconButton, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../App";
import MuiFab from "../styles/common/Fab";
import { StyledPaper } from "../styles/common/Paper";
import { ResponsiveStack } from "../styles/common/Stack";
import { StyledButton } from "../styles/TaskForm";

function TaskForm({ listIndex }) {
    const [newTask, setNewTask] = useState("");

    const changeListsTasks = useContext(Context);

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleClickSubmit = () => {
        changeListsTasks("add", null, listIndex, newTask);
        setNewTask("");
    };

    return (
        <StyledPaper>
            <form onSubmit={handleClickSubmit}>
                <Stack direction="row">
                    <TextField label="New task..." value={newTask} onChange={handleChange} />
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </form>
        </StyledPaper>
    );
}

export default TaskForm;
