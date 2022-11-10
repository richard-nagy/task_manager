import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
    color: "#000",
    backgroundColor: "#FFFFFFB3",
    ":hover": {
        backgroundColor: "#FFFFFF99",
    },
});

export { StyledButton };
