import { Fab, Tooltip } from "@mui/material";
import React from "react";

export const MuiFab = ({ children, tooltip = null, ...rest }) => {
    return (
        <Tooltip title={tooltip}>
            <Fab
                {...rest}
                sx={{
                    width: { xs: "100%", sm: "auto" },
                }}
            >
                {children}
            </Fab>
        </Tooltip>
    );
};

export default MuiFab;
