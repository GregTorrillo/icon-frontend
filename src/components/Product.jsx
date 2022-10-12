import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  position: relative;
  &:hover {
    background-color: rgba(255, 193, 77, .25);
  }
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  z-index: 2;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 18px;
  padding: 10px 0;
  text-align: center;
`;

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};

const Product = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item._id}`} style={linkStyle}>
      <Image src={item.img} />
      <Title>{item.title}</Title>
      </Link>
    </Container>
  );
};

export default Product;
