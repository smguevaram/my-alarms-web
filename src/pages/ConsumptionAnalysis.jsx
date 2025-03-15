import {Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useState} from "react";

export default function ConsumptionAnalysis() {
    const navigate = useNavigate();
    const [presentation, setPresentation] = useState("");
    const [historyView, setHistoryView] = useState("");

    const data = [
        {name: "Feb", ibuprofeno: 20, acetaminofen: 10},
        {name: "Mar", ibuprofeno: 15, acetaminofen: 25},
        {name: "Abr", ibuprofeno: 30, acetaminofen: 20},
    ];

    return (
        <Container
            sx={{
                mt: 5,
                backgroundColor: "#F2F2F7",
                minHeight: "100vh",
                padding: 4,
            }}
        >
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3}}>
                <Typography variant="h4" sx={{fontWeight: "bold"}}>
                    Análisis de consumo
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#007AFF",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "none",
                        borderRadius: "20px",
                        "&:hover": {backgroundColor: "#005EC3"},
                    }}
                    onClick={() => navigate("/history")}
                >
                    Ver alarmas y recordatorios
                </Button>
            </Box>

            <Paper sx={{padding: 3, borderRadius: 3, boxShadow: "none"}}>
                <Box sx={{width: "100%", height: 300, mb: 3}}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="ibuprofeno" fill="#007AFF"/>
                            <Bar dataKey="acetaminofen" fill="#34C759"/>
                        </BarChart>
                    </ResponsiveContainer>
                </Box>

                <FormControl fullWidth sx={{mb: 2}}>
                    <InputLabel>Presentación de compra</InputLabel>
                    <Select
                        value={presentation}
                        label="Presentación de compra"
                        onChange={(e) => setPresentation(e.target.value)}
                    >
                        <MenuItem value="Pastillas">Pastillas</MenuItem>
                        <MenuItem value="Jarabe">Jarabe</MenuItem>
                        <MenuItem value="Inyección">Inyección</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{mb: 2}}>
                    <InputLabel>Historial</InputLabel>
                    <Select
                        value={historyView}
                        label="Historial"
                        onChange={(e) => setHistoryView(e.target.value)}
                    >
                        <MenuItem value="alarmas">Alarmas</MenuItem>
                        <MenuItem value="notificaciones">Notificaciones</MenuItem>
                        <MenuItem value="propuestas">Propuestas</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
        </Container>
    );
}
