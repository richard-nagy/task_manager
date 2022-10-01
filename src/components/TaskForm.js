import { Button, Fab, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect, useRef } from "react";
import MuiPaper from "../styles/common/Paper";

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
        <form onSubmit={handleSubmit}>
            <MuiPaper>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <TextField
                        label="I'm no' mucking around, give me a task you bloody wanker!"
                        value={input}
                        onChange={handleChange}
                    />
                    <Fab color="primary" onClick={handleSubmit}>
                        +
                    </Fab>
                </Stack>
            </MuiPaper>
        </form>
    );
}

export default TaskForm;
