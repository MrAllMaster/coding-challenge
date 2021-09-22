import React from "react";
import Typography from "@mui/material/Typography";

const HeaderCandidatesAmount = (props) => {
  const { amount } = props;
  return (
    <Typography variant="h6" gutterBottom component="div">
      {amount} Candidates
    </Typography>
  );
};

export default HeaderCandidatesAmount;
