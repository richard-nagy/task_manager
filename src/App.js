import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
    const [columns, setColumns] = useState([
        { id: "0", title: "To-Do", bgColor: { main: "lightgreen", second: "green" } },
        { id: "0", title: "Doing", bgColor: { main: "lightcoral", second: "red" } },
        { id: "0", title: "Done", bgColor: { main: "lightyellow", second: "yellow" } },
    ]);

    return (
        <Stack direction="row" p={5} sx={{ width: "max-content" }}>
            {columns.map((e) => {
                return <TaskList key={e.id} title={e.title} bgColor={e.bgColor} />;
            })}
        </Stack>
    );
}

export default App;
