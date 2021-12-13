import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>
      Super Deal!!!! Sale starts from tomorrow
  </Container>;
};

export default Announcement;
