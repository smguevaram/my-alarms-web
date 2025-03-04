import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssBaseline />
    <AppRoutes />
  </>
);
