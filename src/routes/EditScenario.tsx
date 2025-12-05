import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

interface Scenario {
    img: string;
    title: string;
    content: string;
    url: string;
}

export const ScenariosList: React.FC = () => {
    const [scenarios, setScenarios] = useState<Scenario[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchScenarios = async () => {
            try {
                const response = await fetch('/data/Scenarii_SatURN.json'); // Assure-toi que le fichier JSON est dans le dossier public
                const data = await response.json();
                setScenarios(data);  // Met à jour l'état avec les scénarios récupérés
            } catch (error) {
                console.error('Failed to fetch scenarios:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchScenarios();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={3}
        >
            <Typography variant="h4" marginBottom={3} sx={{color: "#FFFF"}}>
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
                            height: '300px', // Ajuste la hauteur de la carte en fonction du contenu
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
                                onClick={() => navigate('/edit-scenario')} // Modifier selon le comportement
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
