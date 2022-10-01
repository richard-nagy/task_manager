import { Button, Fab, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import MuiPaper from "../styles/common/Paper";

const Task = ({ item, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(item.text);

    const handleSave = () => {
        updateTodo(item.id, text);
        setEdit(false);
    };

    const handleCancel = () => {
        setText(item.text);
        setEdit(false);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleDelete = (e) => {
        removeTodo(item.id);
    };

    const TaskContent = () => {
        if (edit) {
            return (
                <>
                    <TextField value={text} onChange={(e) => handleChange(e)} />
                    <Button color="success" onClick={handleSave}>
                        save
                    </Button>
                    <Button color="error" onClick={handleCancel}>
                        cancel
                    </Button>
                </>
            );
        }

        return (
            <>
                {item.text}
                <div>
                    <Fab color="primary" onClick={() => setEdit(true)}>
                        A
                    </Fab>
                    <Fab color="error" onClick={handleDelete}>
                        B
                    </Fab>
                </div>
            </>
        );
    };

    return (
        <MuiPaper>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                {TaskContent()}
            </Stack>
        </MuiPaper>
    );
};

export default Task;
