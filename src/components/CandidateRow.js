import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import moment from "moment";
import CandidateStatus from "./CandidateStatus";
import CandidateRowExpanded from "./CandidateRowExpanded";

const CandidateRow = (props) => {
  const { candidate } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell component="th" scope="row">
          {candidate.name}
        </TableCell>

        <TableCell>
          <CandidateStatus status={candidate.applications[0].new_status} />
        </TableCell>
        <TableCell>{candidate.applications.length}</TableCell>
        <TableCell>{moment(candidate.profile.updated).fromNow()}</TableCell>
      </TableRow>
      <CandidateRowExpanded applications={candidate.applications} open={open} />
    </React.Fragment>
  );
};

export default CandidateRow;
