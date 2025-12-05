import { Box, Button, Typography } from "@mui/material";
import "./styles/Scenario.css";

export interface TransitionProps {
    descriptions: string;
}

function Scenario({ descriptions }: TransitionProps) {
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", 
                minHeight: "50vh", 
                gap: "40px", 
                border: "2px solid white", 
                padding: "50px", 
                borderRadius: "10px", 
                backgroundColor: "#2B2A38", 
                margin: "0 auto", 
                marginTop: "25vh", 
            }}
        >
            <Typography variant="h4" align="center" marginBottom={2} sx={{ color: "#F67FCA" }}>
                {descriptions ? descriptions : "Aucune description disponible."}
            </Typography>
            <Button variant="contained">Suivant</Button>
        </Box>
    );
}

export default Scenario;
