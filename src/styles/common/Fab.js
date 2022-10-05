import { Fab, Tooltip } from "@mui/material";
import React from "react";

export const MuiFab = ({ children, tooltip = null, ...rest }) => {
    return (
        <Tooltip title={tooltip}>
            <Fab {...rest}>{children}</Fab>
        </Tooltip>
    );
};

export default MuiFab;
