import React, { useState } from "react";
import Task from "./Task";
import Stack from "@mui/material/Stack";
import { StackStyle } from "../styles/TaskList";
import TaskForm from "./TaskForm";

function TaskList() {
    const [todos, setTodos] = useState([
        { id: 0, text: "test1" },
        { id: 1, text: "text2" },
    ]);

    const stuff = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            console.log("cant add empty stuff");
            return;
        }

        setTodos((oldTodos) => [...oldTodos, todo]);
    };

    const updateTodo = (todoId, newValue) => {
        setTodos((oldTodos) =>
            oldTodos.map((item) => (item.id === todoId ? { id: todoId, text: newValue } : item))
        );
    };

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removedArr);
    };

    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
            sx={StackStyle}
        >
            <h1>Oi mate, Wha' are the plans for today?</h1>
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
    );
}

export default TaskList;
