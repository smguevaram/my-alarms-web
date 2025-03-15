import {Button, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container sx={{textAlign: "center", mt: 5, height: '100%', width: '100%'}} className="home">
            <Typography variant="h3">My Alarms</Typography>
            <img src="home.png"/>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#007AFF",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "&:hover": {
                        backgroundColor: "#005EC3",
                    },
                }}
                onClick={() => navigate("/privacy-policy")}
            >
                Ingresar con Google
                <GoogleIcon sx={{fontSize: "20px"}}/>
            </Button>
        </Container>
    );
}
