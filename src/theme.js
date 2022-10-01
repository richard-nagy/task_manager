import { createTheme } from "@mui/material/styles";

const theme = () => {
    // const { palette } = createTheme({
    //     palette: {
    //         primary: {
    //             main: "#0C389F",
    //         },
    //         secondary: {
    //             main: "#DBE9FD",
    //             contrastText: "#0C389F",
    //         },
    //         error: {
    //             main: "#E13232",
    //         },
    //         warning: {
    //             main: "#FFB100",
    //         },
    //         info: {
    //             main: "#8BC34A",
    //         },
    //         danger: {
    //             main: "#FF4C4C",
    //             contrastText: "#FFFFFF",
    //         },
    //         newColor: {
    //             main: "#DC52F0",
    //             contrastText: "#ADF528",
    //         },
    //     },
    //     spacing: 8,
    // });

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
                    root: {},
                },
            },
            MuiFab: {
                defaultProps: {
                    size: "small",
                },
                styleOverrides: {
                    root: {
                        margin: "2.5px 5px",
                        borderRadius: "4px",
                        maxHeight: "36.5px",
                        minHeight: "36.5px",
                        minWidth: "36.5px",
                        maxWidth: "36.5px",
                    },
                },
            },
        },
    });
};

export { theme };
