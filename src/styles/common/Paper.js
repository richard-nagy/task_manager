import { Paper } from "@mui/material";

const MuiPaper = ({ children }) => {
    const style = {
        padding: "10px",
        width: "75vw",
        maxWidth: "600px",
    };

    return (
        <Paper variant="outlined" sx={style}>
            {children}
        </Paper>
    );
};

export default MuiPaper;
