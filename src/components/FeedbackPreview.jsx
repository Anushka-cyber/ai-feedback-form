import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DownloadIcon from "@mui/icons-material/Download";
import jsPDF from "jspdf";
import Confetti from "react-confetti";



export default function FeedbackPreview({ formData }) {
  const [feedback, setFeedback] = useState("");
const [copied, setCopied] = useState(false);
const [showConfetti, setShowConfetti] = useState(true);


  useEffect(() => {
  if (formData.name && formData.role && formData.traits.length) {
    const traitStr = formData.traits.join(", ");
    const context = formData.context ? ` ${formData.context}` : "";
    const generated = `${formData.name} has shown exceptional performance as a ${formData.role}. Their strengths include ${traitStr}.${context} I confidently recommend them for future opportunities.`;
    setFeedback(generated);
  }

  const timer = setTimeout(() => setShowConfetti(false), 4000);

  return () => clearTimeout(timer);
}, [formData]);


  const handleCopy = () => {
    navigator.clipboard.writeText(feedback);
    setCopied(true);
  };

  const handleExportPDF = () => {
  const doc = new jsPDF();
  doc.setFont("Poppins", "normal");
  doc.setFontSize(14);
  doc.text(feedback, 20, 30, { maxWidth: 170 });
  doc.save(`${formData.name}_feedback.pdf`);
};


  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        🎉 Here’s your AI-Generated Feedback:
      </Typography>

      <Card elevation={3} sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
            {feedback}
          </Typography>
        </CardContent>
      </Card>

      <Stack direction="column" spacing={2}>
        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={handleCopy}
        >
          Copy to Clipboard
        </Button>

        <Button
          variant="outlined"
          startIcon={<RestartAltIcon />}
          onClick={handleRestart}
        >
          Generate New Feedback
        </Button>

        <Button
          variant="text"
          startIcon={<DownloadIcon />}
          onClick={handleExportPDF}
        >
          Export as PDF
        </Button>
      </Stack>

      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
      >
        <Alert severity="success" onClose={() => setCopied(false)}>
          Feedback copied!
        </Alert>
      </Snackbar>
      {showConfetti && (
  <Confetti width={window.innerWidth} height={window.innerHeight} />
)}

    </Box>
    

  );
}
