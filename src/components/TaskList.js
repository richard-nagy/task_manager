import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function TaskList() {
    console.log("render");

    const [todos, setTodos] = useState([
        { id: 0, text: "Buy milk", done: true },
        { id: 1, text: "Buy cigarette", done: true },
        { id: 2, text: "Abandon family", done: false },
    ]);

    const stuff = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            console.log("cant add empty stuff");
            return;
        }

        setTodos((oldTodos) => [...oldTodos, todo]);
    };

    const updateTodo = (todoId, newItem) => {
        setTodos((oldTodos) => oldTodos.map((item) => (item.id === todoId ? newItem : item)));
    };

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removedArr);
    };

    return (
        <Container component="span" sx={{ width: "90%" }}>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={3}>
                <Box
                    component={Paper}
                    sx={{
                        p: 3,
                        backgroundColor: "#e8f4f8",
                        margin: 5,
                        width: "100%",
                        maxWidth: "md",
                    }}
                >
                    <Stack direction="column" alignItems="stretch" spacing={2}>
                        <Typography variant="h4" align="center" gutterBottom={true}>
                            Task manager, or something like that...
                        </Typography>
                        <TaskForm onSubmit={stuff} />
                        {todos.map((item) => {
                            return (
                                <Task
                                    key={item.id}
                                    item={item}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                />
                            );
                        })}
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}

export default TaskList;
