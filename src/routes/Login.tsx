import React, {useState} from 'react';
import {Box, TextField, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router';
import {AuthService} from "../services/authService.ts";  // Import de useNavigate

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Hook de navigation

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);


        const authLogin = new AuthService(email, password)
        await authLogin.authenticate()
        const token = authLogin.getToken()
        if (!token) {
            setError("Email ou mot de passe incorrect.");
            setLoading(false);
            return;
        }
        localStorage.setItem("token", token)
        setLoading(false);
        navigate('/edit-scenario');
    };


    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#2B2A38"
            marginTop={"0%"}
            borderRadius={25}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                display="flex"
                flexDirection="column"
                alignItems="center"
                maxWidth="400px"
                width="100%"
                padding={4}
                bgcolor="white"
                borderRadius={2}
                boxShadow={3}
            >
                <Typography variant="h4" align="center" marginBottom={2} sx={{color: "#F67FCA"}}>
                    Sign In
                </Typography>

                {error && (
                    <Typography color="error" variant="body2" marginBottom={2}>
                        {error}
                    </Typography>




                )}

                <TextField
                    label="Email"
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    margin="normal"
                    sx={{borderRadius: 2}}
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    margin="normal"
                    sx={{borderRadius: 2}}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={{marginTop: 2, borderRadius: 12, bgcolor: "#F67FCA"}}
                >
                    <Typography sx={{marginLeft: 1}}>Se connecter</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
