import React from "react";
import styled from "styled-components";

import Map from "./Map";

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const NoMatch = () => (
  <Wrapper>
    <Map />
  </Wrapper>
);
