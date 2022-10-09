import { Checkbox, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { ContainerPaper } from "../styles/common/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import MuiFab from "../styles/common/Fab";
import { TextContainer } from "../styles/Task";

const Task = ({ item, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(item.text);

    const handleSave = (done) => {
        updateTodo(item.id, { id: item.id, text: text, done: done });
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
                    <MuiFab tooltip="Save" color="success" onClick={() => handleSave(item.done)}>
                        <SaveIcon />
                    </MuiFab>
                    <MuiFab tooltip="Cancel" color="error" onClick={handleCancel}>
                        <CancelIcon />
                    </MuiFab>
                </>
            );
        }

        return (
            <>
                <Checkbox checked={item.done} onChange={() => handleSave(!item.done)} />
                <TextContainer>{item.text}</TextContainer>
                <MuiFab tooltip="Edit" color="primary" onClick={() => setEdit(true)}>
                    <EditIcon />
                </MuiFab>
                <MuiFab tooltip="Delete" color="error" onClick={handleDelete}>
                    <DeleteIcon />
                </MuiFab>
            </>
        );
    };

    return (
        <ContainerPaper>
            <Stack direction="row" alignItems="center">
                {TaskContent()}
            </Stack>
        </ContainerPaper>
    );
};

export default Task;
