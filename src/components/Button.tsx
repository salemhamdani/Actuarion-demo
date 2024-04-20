import React from "react";
import { Button } from "@mui/material";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";

const ExportButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      startIcon={<ImportExportOutlinedIcon sx={{ fontSize: "32px" }} />}
      sx={{
        borderRadius: "20px", // Rounded borders
        textTransform: "none", // Keeps the text case as provided
        fontSize: 18, // Slightly larger font size for better readability
        padding: "8px 16px", // Comfortable padding around text and icon
        backgroundColor: "#1095c5",
        "&:hover": {
          backgroundColor: "primary.dark", // Darken on hover for better interaction feedback
        },
        ".MuiSvgIcon-fontSizeMedium": {
          // This ensures that the icon container is large enough
          display: "inline-flex", // Keeps the icon aligned properly
          verticalAlign: "middle",
          height: "30px",
          width: "30px",
        },
      }}
    >
      Export
    </Button>
  );
};

export default ExportButton;
