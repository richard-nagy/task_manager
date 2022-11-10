import { Fab, Tooltip } from "@mui/material";
import React from "react";

export const MuiFab = ({ children, tooltip = null, ...rest }) => {
    return (
        <Tooltip title={tooltip}>
            <Fab
                {...rest}
                sx={{
                    width: { xs: "100%", sm: "auto" },
                    color: "#000",
                    backgroundColor: "#FFFFFFB3",
                    ":hover": {
                        backgroundColor: "#FFFFFF99",
                    },
                }}
            >
                {children}
            </Fab>
        </Tooltip>
    );
};

export default MuiFab;
