import React from "react";
import styled from "styled-components";

import Tables from "./Material-Ui/Tables";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 3em;
  margin-left: 9em;
  margin-right: 2em;

  grid-auto-rows: minmax(105px, auto);
`;
export const About = () => (
  <GridWrapper>
    <Tables />
  </GridWrapper>
);
