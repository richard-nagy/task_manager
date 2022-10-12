import { Tooltip, Typography } from "@mui/material";

export const TextContainer = ({ children, ...rest }) => {
    return (
        <Tooltip placement="bottom-start" title={children}>
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
        </Tooltip>
    );
};
