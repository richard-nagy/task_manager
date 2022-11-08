import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
// import { TasksContainer } from "../styles/TaskList";

function TaskList({ list, listIndex }) {
    return (
        <Paper sx={{ padding: "10px" }}>
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
                <TaskForm listIndex={listIndex} />
            </Stack>
        </Paper>
    );
}

export default TaskList;
