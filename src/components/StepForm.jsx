import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FeedbackPreview from "./FeedbackPreview";

import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Fade,
} from "@mui/material";

const steps = ["Candidate Info", "Skills", "Context", "Preview"];

export default function StepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    traits: [],
    context: "",
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepOne formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <StepTwo formData={formData} setFormData={setFormData} />
        );
      case 2:
        return (
          <StepThree formData={formData} setFormData={setFormData} />
        );
      case 3:
        return <FeedbackPreview formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
        {steps.map((label, i) => (
          <Step key={i}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Fade in timeout={400} key={activeStep}>
        <Box sx={{ minHeight: 180 }}>{renderStep()}</Box>
      </Fade>

      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        gap={2}
      >
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
