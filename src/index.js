import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import React from "react";
import App from "./App";
import "./index.css";

// const rootElement = document.getElementById("root");

// ReactDOM.render(
//     <StrictMode>
//         <ThemeProvider theme={theme()}>
//             <App />
//         </ThemeProvider>
//     </StrictMode>,
//     rootElement
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme()}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
