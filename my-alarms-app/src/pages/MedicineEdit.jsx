import { Container, Typography, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function MedicineEdit() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(40);

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Edición: Medicamento {id}</Typography>
      <TextField 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        sx={{ mt: 2, width: "200px" }}
      />
      <Button variant="contained" sx={{ mt: 2 }}>
        Guardar
      </Button>
    </Container>
  );
}
