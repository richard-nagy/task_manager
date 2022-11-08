import { Paper } from "@mui/material";
import { Box } from "@mui/system";

export const TasksContainer = ({ children, bgColor, ...rest }) => {
    return (
        <Paper
            {...rest}
            sx={{
                p: 3,
                backgroundColor: bgColor,
                width: "400px",
                maxWidth: "md",
            }}
        >
            {children}
        </Paper>
    );
};
