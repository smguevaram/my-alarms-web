import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3">My Alarms</Typography>
      <Button 
        variant="contained" 
        sx={{ mt: 2 }}
        onClick={() => navigate("/privacy-policy")}
      >
        Ingresar con Google
      </Button>
    </Container>
  );
}
