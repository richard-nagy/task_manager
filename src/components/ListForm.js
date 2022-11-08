import { Button, Fab, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../App";
// import MuiFab from "../styles/common/Fab";
// import { ContainerPaper } from "../styles/common/Paper";
// import { ResponsiveStack } from "../styles/common/Stack";

const ListForm = ({ addNewTaskList }) => {
    const [newListName, setNewListName] = useState("");

    const handleChange = (e) => {
        setNewListName(e.target.value);
    };

    const handleClickSubmit = () => {
        addNewTaskList(newListName);
        setNewListName("");
    };

    return (
        <Paper>
            <form onSubmit={handleClickSubmit}>
                <Stack direction="row">
                    <TextField label="New list..." value={newListName} onChange={handleChange} />
                    <Fab tooltip="Add" color="primary" onClick={handleClickSubmit}>
                        <AddIcon />
                    </Fab>
                </Stack>
            </form>
        </Paper>
    );
};

export default ListForm;
