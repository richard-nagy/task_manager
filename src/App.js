import { AppBar, Box, Button, CircularProgress, Paper, Toolbar, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { createContext, useEffect, useState } from "react";
import ListForm from "./components/ListForm";
import TaskList from "./components/TaskList";

const Context = createContext("Default Value");
let id = 0;

function App() {
    const [time, setTime] = useState(5);
    const [taskLists, setTaskLists] = useState([
        {
            id: `list${id++}`,
            title: "To-Do",
            tasks: [
                { id: `task${id++}`, description: "a" },
                { id: `task${id++}`, description: "b" },
                { id: `task${id++}`, description: "c" },
            ],
            bgColor: { primary: "lightgreen", secondary: "green" },
        },
        {
            id: `list${id++}`,
            title: "Doing",
            tasks: [],
            bgColor: { primary: "lightcoral", secondary: "red" },
        },
        {
            id: `list${id++}`,
            title: "Done",
            tasks: [],
            bgColor: { primary: "lightyellow", secondary: "yellow" },
        },
    ]);

    const refreshClock = () => {
        setTime((old) => (old > 0 ? old - 1 : old));
    };

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        if (time === 0) {
            console.log("saved");
            // TODO: Upload changes to database
        }
    }, [time]);

    const changeListsTasks = (type, taskIndex, listIndex, task) => {
        setTime(5);

        const newLists = taskLists;

        switch (type) {
            case "add":
                newLists[listIndex].tasks.push({ id: `task${id++}`, description: task });
                setTaskLists(newLists);
                break;
            case "edit":
                newLists[listIndex].tasks[taskIndex] = task;
                setTaskLists(newLists);
                break;
            case "delete":
                newLists[listIndex].tasks = newLists[listIndex].tasks.filter(
                    (_, i) => i !== taskIndex
                );
                setTaskLists(newLists);
                break;
            default:
                break;
        }
    };

    const addNewTaskList = (listName) => {
        setTaskLists((oldTaskList) => [
            ...oldTaskList,
            {
                id: `list${id++}`,
                title: listName,
                tasks: [],
                bgColor: { primary: "lightcoral", secondary: "red" },
            },
        ]);
    };

    return (
        <Context.Provider value={changeListsTasks}>
            <Box mt={6}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="static" component="div">
                            Saving in: {time}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Stack
                direction="row"
                p={5}
                sx={{
                    width: "max-content",
                    // height: "100%",
                    // backgroundColor: "green",
                    // height: "100%",
                }}
                spacing={2}
            >
                {taskLists.map((list, i) => {
                    return <TaskList list={list} listIndex={i} />;
                })}
                <ListForm addNewTaskList={addNewTaskList} />
            </Stack>
        </Context.Provider>
    );
}

export default App;
export { Context };
