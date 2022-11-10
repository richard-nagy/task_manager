import { Paper } from "@mui/material";
import { Box } from "@mui/system";

export const StyledPaper = ({ children, bgColor, ...rest }) => {
    return (
        <Paper
            {...rest}
            sx={{
                p: 1,
                backgroundColor: bgColor.primary,
                width: "400px",
                maxWidth: "md",
                height: "calc(100vh - 140px)",
                overflow: "auto",
            }}
        >
            {children}
        </Paper>
    );
};
