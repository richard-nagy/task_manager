import { createTheme } from "@mui/material/styles";

const theme = () => {
    return createTheme({
        components: {
            MuiButton: {
                defaultProps: {
                    variant: "contained",
                },
                styleOverrides: {
                    root: {
                        margin: "2.5px 5px",
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    size: "small",
                    fullWidth: true,
                },
                styleOverrides: {
                    root: {
                        margin: "0px 5px",
                    },
                },
            },
            MuiFab: {
                defaultProps: {
                    size: "small",
                },
                styleOverrides: {
                    root: {
                        margin: "5px",
                        borderRadius: "4px",
                        minWidth: "40px",
                        minHeight: "40px",
                    },
                },
            },
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        marginLeft: "10px",
                    },
                },
            },
        },
    });
};

export { theme };
