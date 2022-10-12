import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  height: 3vh;
  background-color: orange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`; 

const Announcement = () => {
  return (
        <Container>
            FREE SHIPPING on ALL orders!
        </Container>
  )
}

export default Announcement