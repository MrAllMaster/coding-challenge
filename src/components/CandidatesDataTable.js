import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CandidateRow from "./CandidateRow";

const CandidatesDataTable = (props) => {
  const { candidates } = props;
  return (
    <TableContainer component={Paper} style={{ backgroundColor: "#f8f8f8" }}>
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
  );
};
export default CandidatesDataTable;
