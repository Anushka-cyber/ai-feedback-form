import React from "react";
import StepForm from "./components/StepForm";
import {
  Typography,
  CssBaseline,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f3f0ff",
    },
    primary: {
      main: "#5c6ac4",
    },
    text: {
      primary: "#101010",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1c1c28",
    },
    primary: {
      main: "#9f7aea",
    },
    text: {
      primary: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const gradientBackground = darkMode
    ? "linear-gradient(135deg, #2d2d40 0%, #1a1a2e 100%)"
    : "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)";

  const cardBackground = darkMode
    ? "rgba(30, 30, 40, 0.8)"
    : "rgba(255, 255, 255, 0.75)";

  const boxShadow = darkMode
    ? "0 8px 24px rgba(0, 0, 0, 0.5)"
    : "0 12px 32px rgba(0, 0, 0, 0.1)";

  const borderColor = darkMode ? "#333" : "#ddd";

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: gradientBackground,
          padding: 2,
        }}
      >
        <Box
          sx={{
            padding: 4,
            width: "100%",
            maxWidth: 480,
            borderRadius: 5,
            backdropFilter: "blur(20px)",
            background: cardBackground,
            boxShadow: boxShadow,
            border: `1px solid ${borderColor}`,
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              AI-Powered Feedback Form
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Please answer a few questions to generate feedback.
            </Typography>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
              label="Dark Mode"
            />
          </Box>
          <StepForm />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
