import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const traitsList = [
  "Excellent Communication",
  "Team Player",
  "Quick Learner",
  "Leadership",
  "Accountability",
  "Problem Solver",
  "Creative Thinker",
  "Time Management",
];

export default function StepTwo({ formData, setFormData }) {
  const handleCheckboxChange = (event) => {
    const value = event.target.name;
    const isChecked = event.target.checked;

    const updatedTraits = isChecked
      ? [...formData.traits, value]
      : formData.traits.filter((trait) => trait !== value);

    setFormData({ ...formData, traits: updatedTraits });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Strengths / Traits
      </Typography>

      <Box
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          opacity: 0.7,
        }}
      >
        <EmojiObjectsIcon />
        <Typography variant="body2">
          Select qualities you want highlighted in the feedback.
        </Typography>
      </Box>

      <FormGroup>
        {traitsList.map((trait) => (
          <FormControlLabel
            key={trait}
            control={
              <Checkbox
                checked={formData.traits.includes(trait)}
                onChange={handleCheckboxChange}
                name={trait}
              />
            }
            label={trait}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
