import {
    Checkbox,
    Grid,
    Link,
    Stack,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import { StyledPaper } from "../styles/common/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import MuiFab from "../styles/common/Fab";
import { TextContainer } from "../styles/Task";
import { ButtonStack, ResponsiveStack } from "../styles/common/Stack";
import styled from "@emotion/styled";
import { Context } from "../App";

const StyledTextField = styled(TextField)({
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
    const updateTasks = useContext(Context);
    const [text, setText] = useState(task);

    useEffect(() => {
        updateTasks(null, true);

        let timer1 = setTimeout(() => {
            updateTasks((prevState) => {
                return prevState.map((item, i) => {
                    if (i === listIndex) {
                        return item.map((item, i) => (i === taskIndex ? text : item));
                    } else return item;
                });
            });
        }, 5000);

        return () => {
            clearTimeout(timer1);
        };
    }, [text]);

    const handleInput = (e) => {
        setText(e.target.value);
    };

    const handleDeleteClick = () => {
        updateTasks((oldState) => {
            return oldState.map((item, i) => {
                if (i === listIndex) {
                    return item.filter((_, i) => i !== taskIndex);
                } else return item;
            });
        }, true);
    };

    return (
        <StyledPaper>
            <Stack direction="column" alignItems="flex-end">
                <StyledTextField
                    multiline
                    value={text}
                    onChange={(e) => handleInput(e)}
                    maxRows={6}
                    placeholder="Enter task..."
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
        </StyledPaper>
    );
};

export default Task;
