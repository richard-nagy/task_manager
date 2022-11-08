import { Stack } from "@mui/material";

export const ResponsiveStack = ({ children, ...rest }) => {
    return (
        <Stack
            alignItems="center"
            {...rest}
            sx={{
                flexDirection: { xs: "column", sm: "row" },
            }}
        >
            {children}
        </Stack>
    );
};

export const ButtonStack = ({ children, ...rest }) => {
    return (
        <Stack {...rest} sx={{ width: { xs: "100%", sm: "100px" } }}>
            {children}
        </Stack>
    );
};
