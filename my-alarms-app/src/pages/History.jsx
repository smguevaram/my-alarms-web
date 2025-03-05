import { 
    Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Box, Chip 
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  
  export default function History() {
    const navigate = useNavigate();
  
    const alarms = [
      { id: 1, name: "Ibuprofeno", status: "Eliminada", lastTake: "10/02/2025", stock: 10 },
      { id: 2, name: "Acetaminofén", status: "Activa", lastTake: "15/02/2025", stock: 30 },
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Control de alarmas y recordatorios
            </Typography>
            <Button 
            variant="contained"
            sx={{ 
                backgroundColor: "#FFC107", // Color amarillo del botón
                color: "#000",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "20px",
                "&:hover": { backgroundColor: "#E0A800" },
            }}
            onClick={() => navigate(`/consumption-analysis`)}
            >
            Ver análisis de consumo
            </Button>
        </Box>
        
  
        <Paper sx={{ mt: 3, overflow: "hidden", boxShadow: "none" }}>
          <Table sx={{ borderRadius: '0' }}>
            <TableHead sx={{}}>
              <TableRow>
                <TableCell><strong>Nombre</strong></TableCell>
                <TableCell sx={{ textAlign: "center" }}><strong>Estado</strong></TableCell>
                <TableCell sx={{ textAlign: "center" }}><strong>Última toma</strong></TableCell>
                <TableCell sx={{ textAlign: "center" }}><strong>Inventario Actual</strong></TableCell>
                <TableCell sx={{ textAlign: "center" }}><strong>Editar Inventario</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alarms.map((alarm) => (
                <TableRow key={alarm.id}>
                  <TableCell>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {alarm.name}
                      <Chip label="Medicamento" size="small" sx={{ mt: 0.5, backgroundColor: "#000", color: "#fff" }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{alarm.status}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{alarm.lastTake}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{alarm.stock}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button 
                      variant="contained"
                      sx={{
                        backgroundColor: "#007AFF",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "none",
                        borderRadius: "20px",
                        "&:hover": { backgroundColor: "#005EC3" },
                      }}
                      onClick={() => navigate(`/edit-medicine/${alarm.id}`)}
                    >
                      Editar Inventario
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    );
  }
  