import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import HeaderCandidatesAmount from "./components/HeaderCandidatesAmount";
import CandidatesDataTable from "./components/CandidatesDataTable";

import data from "data/candidates.json";

function App() {
  const [candidates, setCandidates] = useState(data.results);

  return (
    <Container>
      <HeaderCandidatesAmount amount={candidates.length} />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <CandidatesDataTable candidates={candidates} />
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
