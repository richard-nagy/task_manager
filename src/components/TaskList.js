import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { TasksContainer } from "../styles/TaskList";

function TaskList({ title, bgColor }) {
    const [todos, setTodos] = useState([
        { id: 0, text: "Buy milk", done: true },
        { id: 1, text: "Take the dog for a walk", done: false },
    ]);

    const submitTask = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            console.log("cant add empty task");
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
            <TasksContainer bgColor={bgColor.second}>{title}</TasksContainer>
            <TasksContainer bgColor={bgColor.main}>
                <Stack direction="column" spacing={2}>
                    <TaskForm onSubmit={submitTask} />
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
        </Container>
    );
}

export default TaskList;
