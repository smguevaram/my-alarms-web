import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  const alarms = [
    { id: 1, name: "Paracetamol", status: "Activo", stock: 10 },
    { id: 2, name: "Ibuprofeno", status: "Inactivo", stock: 5 },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Control de alarmas y recordatorios</Typography>
      <Button 
        variant="contained" 
        size="small"
        onClick={() => navigate(`/consumption-analysis`)}
    >
        Editar
    </Button>
      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Inventario</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alarms.map((alarm) => (
            <TableRow key={alarm.id}>
              <TableCell>{alarm.name}</TableCell>
              <TableCell>{alarm.status}</TableCell>
              <TableCell>{alarm.stock}</TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  size="small"
                  onClick={() => navigate(`/edit-medicine/${alarm.id}`)}
                >
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
