import {Box, Button, Container, IconButton, Paper, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function MedicineEdit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [stock, setStock] = useState(40);

    const decrement = () => {
        if (stock > 0) {
            setStock(stock - 1);
        }
    };

    const increment = () => {
        setStock(stock + 1);
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#F2F2F7",
            }}
        >
            <Paper
                sx={{
                    maxWidth: 400,
                    padding: 3,
                    borderRadius: 3,
                    textAlign: "center",
                }}
            >
                <Typography variant="h5" sx={{fontWeight: "bold", mb: 3}}>
                    Edición: Medicamento {id}
                </Typography>
                <Typography sx={{mb: 2}}>Ingresa tu nuevo stock o ajusta con los botones.</Typography>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: 2}}>
                    <IconButton onClick={decrement} sx={{color: "#007AFF"}}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <Typography variant="h4" sx={{minWidth: "50px", textAlign: "center"}}>
                        {stock}
                    </Typography>
                    <IconButton onClick={increment} sx={{color: "#007AFF"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", mt: 3}}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#F2F2F7",
                            color: "#333",
                            fontWeight: "bold",
                            borderRadius: "20px",
                            textTransform: "none",
                            border: "1px solid #333",
                            "&:hover": {backgroundColor: "#E0E0E0"},
                            width: "48%",
                        }}
                        onClick={() => navigate("/history")}
                    >
                        Volver
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#007AFF",
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "20px",
                            textTransform: "none",
                            "&:hover": {backgroundColor: "#005EC3"},
                            width: "48%"
                        }}
                        onClick={() => navigate("/history")}
                    >
                        Actualizar
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
