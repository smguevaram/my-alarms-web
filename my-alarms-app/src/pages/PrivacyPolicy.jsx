import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <Container
            className="privacy-policy"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#F2F2F7",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    maxWidth: 400,
                    padding: 3,
                    borderRadius: 3,
                    textAlign: "center"
                }}
            >
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    Políticas de privacidad
                </Typography>
                <Typography sx={{mt: 2}} className="paragraph">
                    Al hacer clic en "Permitir", confirmas que has leído y aceptas nuestra Política de Privacidad, donde
                    protegemos tu información y usamos datos solo para mejorar tu experiencia en My Alarms.
                </Typography>
                <Box sx={{display: "flex", justifyContent: "right", mt: 3}}>
                    <Button
                        sx={{
                            color: "#007AFF",
                            fontWeight: "bold",
                            textTransform: "none",
                            "&:hover": {backgroundColor: "transparent"},
                        }}
                        onClick={() => navigate("/history")}
                    >
                        Permitir
                    </Button>
                    <Button
                        sx={{
                            ml: 3,
                            color: "#333",
                            textTransform: "none",
                            "&:hover": {backgroundColor: "transparent"},
                        }}
                        onClick={() => navigate("/")}
                    >
                        No Permitir
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
