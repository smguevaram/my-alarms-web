import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import {CssBaseline} from "@mui/material";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <CssBaseline/>
        <AppRoutes/>
    </>
);
