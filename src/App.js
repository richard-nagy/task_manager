import { Container, Stack } from "@mui/system";
import React from "react";
import TaskList from "./components/TaskList";

function App() {
    return (
        // <Container>
        <Stack direction="row" gap={5} p={5} sx={{ width: "max-content" }}>
            <TaskList />
            <TaskList />
            <TaskList />
            <TaskList />
        </Stack>
        // </Container>
    );
}

export default App;
