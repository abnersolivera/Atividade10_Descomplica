import React, {useState} from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const validEmail = "abnersanto@gmail.com";
    const validPassword = "123";

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === validEmail && password === validPassword) {
        setErrorMessage("");
        navigate("/menu");
      } else {
        setErrorMessage("Email ou senha inválidos.");
      }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        {errorMessage && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mt: 1, mb: 2, textAlign: "center" }}
            >
              {errorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;