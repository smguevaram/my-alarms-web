import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Política de Privacidad</Typography>
      <Typography sx={{ mt: 2 }}>
        Al hacer clic en "Aceptar" confirmas que has leído nuestra política de privacidad.
      </Typography>
      <Button variant="contained" sx={{ mt: 2, mr: 2 }} onClick={() => navigate("/history")}>
        Aceptar
      </Button>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate("/")}>
        No Aceptar
      </Button>
    </Container>
  );
}
