import { SettingsRemoteRounded } from "@mui/icons-material";
import { AppBar, Box, Button, CircularProgress, Paper, Toolbar, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { createContext, useEffect, useState } from "react";
import ListForm from "./components/ListForm";
import TaskList from "./components/TaskList";

const Context = createContext();
let id = 0;

function App() {
    const [time, setTime] = useState(0);
    const [tasks, setTasks] = useState([["test", "test2"], [], []]);

    const [lists, setLists] = useState([
        {
            id: `list${id++}`,
            title: "To-Do",
            bgColor: { primary: "#90caf9", secondary: "#e3f2fd" },
        },
        {
            id: `list${id++}`,
            title: "Doing",
            bgColor: { primary: "#ce93d8", secondary: "#f3e5f5" },
        },
        {
            id: `list${id++}`,
            title: "Done",
            bgColor: { primary: "#f44336", secondary: "#e57373" },
        },
    ]);

    useEffect(() => {
        if (time > 0) {
            let timer1 = setTimeout(() => {
                setTime((old) => old - 1);
            }, 1000);

            return () => {
                clearTimeout(timer1);
            };
        }
    }, [time]);

    const addList = (listName) => {
        setTime(5);
        setLists((prevState) => [
            ...prevState,
            {
                id: `list${id++}`,
                title: listName,
                bgColor: { primary: "#90caf9", secondary: "#e3f2fd" },
            },
        ]);

        setTasks((prevState) => [...prevState, []]);
    };

    const changeTaskColor = (newColors, listIndex) => {
        setTime(5);
        setLists((prevState) => {
            const newState = prevState.map((item, i) => {
                if (i === listIndex) {
                    return { ...item, bgColor: newColors };
                }
                return item;
            });
            return newState;
        });
    };

    const contextBadabuj = (value, startTimer) => {
        if (startTimer) {
            setTime(5);
        }
        if (value) {
            setTasks(value);
        }
    };

    return (
        <Context.Provider value={contextBadabuj}>
            <Box mt={6}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="static" component="div">
                            {time ? `Saving in: ${time}` : "Saved..."}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Stack
                direction="row"
                p={5}
                sx={{
                    width: "max-content",
                }}
                spacing={2}
            >
                {lists.map((list, i) => {
                    return (
                        <TaskList
                            list={list}
                            task={tasks[i]}
                            listIndex={i}
                            changeTaskColor={changeTaskColor}
                            setTasks={setTasks}
                        />
                    );
                })}
                <ListForm addList={addList} />
            </Stack>
        </Context.Provider>
    );
}

export default App;
export { Context };
