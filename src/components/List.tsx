import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Avatar,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Chip from "@mui/joy/Chip";
import ExportButton from "./Button";

interface Reclamation {
  id: number;
  title: string;
  description: string;
  cost: string;
}

const reclamations = [
  {
    id: 1,
    title: "Missing Item",
    cost: "20000€",
    description:
      "The package was missing an item that was supposed to be included.",
  },
  {
    id: 2,
    title: "Damaged on Arrival",
    cost: "20000€",
    description: "The item arrived damaged due to poor packaging.",
  },
  {
    id: 3,
    title: "Late Delivery",
    cost: "20000€",
    description:
      "The delivery was delayed by several days beyond the promised time.",
  },
  {
    id: 4,
    title: "Late Delivery",
    cost: "20000€",
    description:
      "The delivery was delayed by several days beyond the promised time.",
  },
  {
    id: 5,
    title: "Late Delivery",
    cost: "20000€",
    description:
      "The delivery was delayed by several days beyond the promised time.",
  },
  {
    id: 6,
    title: "Late Delivery",
    cost: "20000€",
    description:
      "The delivery was delayed by several days beyond the promised time.",
  },
  {
    id: 7,
    title: "Late Delivery",
    cost: "20000€",
    description:
      "The delivery was delayed by several days beyond the promised time.",
  },

  // Add more reclamations as needed
];

interface Props {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ReclamationList: React.FC<Props> = ({ onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [filteredReclamations, setFilteredReclamations] =
    useState(reclamations);

  useEffect(() => {
    const results = reclamations.filter(
      (reclamation) =>
        reclamation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reclamation.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReclamations(results);
  }, [searchTerm, reclamations]);
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Box
          sx={{
            mb: 1,
            my: 4,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "90vw",
          }}
        >
          <Chip
            variant="soft"
            startDecorator={<ArticleOutlinedIcon />}
            size="md"
          >
            Total {filteredReclamations.length}
          </Chip>
          <Box
            sx={{
              mb: 1,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <ExportButton />
            <TextField
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                ".MuiOutlinedInput-root": {
                  borderRadius: "20px", // Adjust this value to increase or decrease the roundness
                },
              }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TableContainer
            component={Paper}
            elevation={4}
            sx={{
              maxWidth: "90vw",
              borderRadius: "16px",
            }}
          >
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{
                borderCollapse: "separate",
                borderSpacing: "0 10px",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      pl: "32px",
                    }}
                  >
                    Info
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Cost
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredReclamations.map((reclamation) => (
                  <TableRow
                    key={reclamation.id}
                    sx={{
                      bgcolor: "background.paper",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      borderRadius: "16px", // Rounded edges for each row
                      marginBottom: "10px", // Adds spacing between rows, only if borderSpacing is not enough
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <PriorityHighOutlinedIcon
                        color="error"
                        sx={{ p: 2 }}
                        fontSize="large"
                      />

                      {reclamation.title}
                    </TableCell>
                    <TableCell>{reclamation.description}</TableCell>
                    <TableCell>{reclamation.cost}</TableCell>

                    <TableCell>
                      <IconButton
                        onClick={() => onEdit(reclamation.id)}
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => onDelete(reclamation.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ReclamationList;
