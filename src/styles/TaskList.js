import { Paper } from "@mui/material";
import { Box } from "@mui/system";

export const TasksContainer = ({ children, ...rest }) => {
    return (
        <Box
            {...rest}
            component={Paper}
            sx={{
                p: 3,
                backgroundColor: "#e8f4f8",
                margin: 5,
                width: "100%",
                maxWidth: "md",
            }}
        >
            {children}
        </Box>
    );
};
