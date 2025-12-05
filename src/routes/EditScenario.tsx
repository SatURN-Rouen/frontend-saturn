import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import scenarioData from '../assets/Scenarii_SatURN.json';  // Importation statique du fichier JSON

interface Scenario {
    img: string;
    title: string;
    content: string;
    url: string;
}

export const ScenariosList: React.FC = () => {
    const [scenarios, setScenarios] = useState<Scenario[]>(scenarioData); // On initialise les données du JSON directement
    const [loading, setLoading] = useState(false);  // Ici on n'a pas besoin de 'true' initialement
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Ici, pas besoin de fetch, car on a déjà les données statiques via import
        // Cependant, si tu souhaites simuler un délai de chargement, tu peux décommenter cette partie
        setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={3}
        >
            <Typography variant="h4" marginBottom={3} sx={{ color: "#FFFF" }}>
                Choisir le scénario à éditer
            </Typography>
            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                gap={3}
                sx={{ width: '100%' }}
            >
                {scenarios.map((scenario, index) => (
                    <Card
                        key={index}
                        sx={{
                            minWidth: 275,
                            boxShadow: 3,
                            position: 'relative',
                            backgroundImage: `url(${scenario.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            padding: 2,
                            borderRadius: 2,
                            height: '300px', 
                        }}
                    >
                        <CardContent sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: 2 }}>
                            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                                {scenario.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white', marginBottom: 2 }}>
                                {scenario.content.length > 150 ? `${scenario.content.slice(0, 150)}...` : scenario.content}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => navigate('/edit-scenario')}
                            >
                                Modifier
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default ScenariosList;
