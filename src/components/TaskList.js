import React, { useContext, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { StyledPaper } from "../styles/TaskList";
import { StyledButton } from "../styles/TaskForm";
import { Context } from "../App";

function TaskList({ list, listIndex }) {
    const changeListsTasks = useContext(Context);

    const addNewTask = () => {
        changeListsTasks("add", null, listIndex);
    };

    return (
        <StyledPaper bgColor={list.bgColor}>
            <Stack direction="column" spacing={1}>
                <h1>{list.title}</h1>
                {list.tasks.map((task, i) => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            listId={list.id}
                            taskIndex={i}
                            listIndex={listIndex}
                        />
                    );
                })}
                <StyledButton onClick={addNewTask}>Add task</StyledButton>
            </Stack>
        </StyledPaper>
    );
}

export default TaskList;
