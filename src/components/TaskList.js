import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { TasksContainer } from "../styles/TaskList";

function TaskList() {
    console.log("render");

    const [todos, setTodos] = useState([
        { id: 0, text: "Buy milk", done: true },
        { id: 1, text: "Take the dog for a walk", done: false },
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
        <Container sx={{ width: "500px" }}>
            <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={3}>
                <TasksContainer>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h4" align="center" gutterBottom={true}>
                            Task manager
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
                </TasksContainer>
            </Stack>
        </Container>
    );
}

export default TaskList;
