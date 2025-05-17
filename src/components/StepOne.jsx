import React from "react";
import {
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";

export default function StepOne({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <TextField
        label="Candidate Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Position / Role"
        variant="outlined"
        name="role"
        value={formData.role}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WorkIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
