import { Typography } from "@mui/material";

export const TextContainer = ({ children, ...rest }) => {
    return (
        <Typography
            {...rest}
            sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
            }}
        >
            {children}
        </Typography>
    );
};
