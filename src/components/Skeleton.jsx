import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 300px;
  height: 300px;
  background-color: grey;
  animation: skeleton 1s ease infinite alternate;
  @keyframes skeleton {
    to{
        opacity: 0.5;
    }
}
`;

const Skeleton = () => {
    const COUNTER = 8;

  return Array(COUNTER).fill(<Container></Container>);
  
}

export default Skeleton