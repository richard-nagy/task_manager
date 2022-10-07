import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import MuiFab from "../styles/common/Fab";
import AddIcon from "@mui/icons-material/Add";
import { ContainerPaper } from "../styles/common/Paper";

function TaskForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput("");
    };

    return (
        <ContainerPaper>
            <form onSubmit={handleSubmit}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <TextField label="New task..." value={input} onChange={handleChange} />
                    <MuiFab tooltip="Add" color="primary" onClick={handleSubmit}>
                        <AddIcon />
                    </MuiFab>
                </Stack>
            </form>
        </ContainerPaper>
    );
}

export default TaskForm;
