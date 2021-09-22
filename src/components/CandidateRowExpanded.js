import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import CandidateStatus from "./CandidateStatus";

const ExpandedCandidateRow = (props) => {
  const { applications, open } = props;
  return (
    <TableRow style={{ backgroundColor: "#ffffff" }}>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Table aria-label="appications">
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell component="th" scope="row">
                      {application.role.title}
                    </TableCell>

                    <TableCell align="left">
                      <CandidateStatus status={application.new_status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default ExpandedCandidateRow;
