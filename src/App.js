import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CandidateRow from "./components/CandidateRow";

import data from "data/candidates.json";

function App() {
  const [candidates, setCandidates] = useState(data.results);

  return (
    <Container>
      <Typography variant="h6" gutterBottom component="div">
        {candidates.length} Candidates
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell>Candidate Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell># Apps</TableCell>
                    <TableCell>Last Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {candidates.map((candidate) => (
                    <CandidateRow key={candidate.id} candidate={candidate} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 4rem !important;
`;
