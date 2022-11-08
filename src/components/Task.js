import {
    Checkbox,
    Grid,
    Link,
    Stack,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import { ContainerPaper } from "../styles/common/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import MuiFab from "../styles/common/Fab";
import { TextContainer } from "../styles/Task";
import { ButtonStack, ResponsiveStack } from "../styles/common/Stack";
import styled from "@emotion/styled";
import { Context } from "../App";

const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused": {
            backgroundColor: "#FFFFFF80",
            border: "none",
        },
        "&:hover": {
            backgroundColor: "#FFFFFFB3",
        },
        "& fieldset": {
            border: "none",
        },
    },
});

const Task = ({ task, taskIndex, listIndex }) => {
    const [editedTask, setEditedTask] = useState({ id: task.id, description: task.description });

    const changeListsTasks = useContext(Context);

    const handleTextboxInput = (e) => {
        setEditedTask((oldTask) => ({ ...oldTask, description: e.target.value }));
        changeListsTasks("edit", taskIndex, listIndex, editedTask);
    };

    const handleDeleteClick = () => {
        changeListsTasks("delete", taskIndex, listIndex);
    };

    return (
        <ContainerPaper>
            <Stack direction="column" alignItems="flex-end">
                <CssTextField
                    multiline
                    value={editedTask.description}
                    onChange={(e) => handleTextboxInput(e)}
                    maxRows={6}
                />
                <Typography
                    variant="caption"
                    mt={1}
                    sx={{
                        color: "gray",
                        ":hover": {
                            cursor: "pointer",
                            textDecoration: "underline",
                        },
                    }}
                    onClick={handleDeleteClick}
                >
                    delete
                </Typography>
            </Stack>
        </ContainerPaper>
    );
};

export default Task;
