import { Paper } from "@mui/material";
import { Box } from "@mui/system";

export const TasksContainer = ({ children, bgColor, ...rest }) => {
    return (
        <Box
            {...rest}
            sx={{
                p: 3,
                backgroundColor: bgColor,
                width: "100%",
                maxWidth: "md",
            }}
        >
            {children}
        </Box>
    );
};
