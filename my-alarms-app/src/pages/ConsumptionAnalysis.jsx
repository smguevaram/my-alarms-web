import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Paracetamol", cantidad: 12 },
  { name: "Ibuprofeno", cantidad: 8 },
];

export default function ConsumptionAnalysis() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Análisis de consumo
      </Typography>

      {/* Acordeón para la gráfica */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Gráfico de Consumo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BarChart width={600} height={300} data={data} style={{ margin: "auto" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cantidad" fill="#82ca9d" />
          </BarChart>
        </AccordionDetails>
      </Accordion>

      {/* Segundo acordeón con información adicional */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Detalles de Consumo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aquí puedes agregar información adicional sobre el consumo de los medicamentos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
