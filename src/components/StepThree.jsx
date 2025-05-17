import React from "react";
import { TextField, Box, Typography, InputAdornment } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";

export default function StepThree({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, context: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add Role-Specific Context
      </Typography>

      <TextField
        placeholder="e.g. Led the UI revamp using React & MUI, optimized performance, collaborated with backend team..."
        label="Context / Project Details"
        name="context"
        multiline
        minRows={5}
        fullWidth
        variant="outlined"
        value={formData.context}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NotesIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
