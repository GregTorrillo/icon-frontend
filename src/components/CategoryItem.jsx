import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { laptop } from "../responsive";

const Container = styled.div`
  flex: 1;
  padding: 0 5px;
  height: 70vh;
  position: relative;
  ${tablet({ height: "50vh"})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "55vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    font-size: 60px;
    text-shadow: 2px 2px 5px #000000;
    ${laptop({ fontSize: "50px"})}
    ${tablet({ fontSize: "50px"})}
    ${mobile({ fontSize: "50px" })}
`;

const Button = styled.button`
    border:none;
    padding: 15px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: bold;
    -webkit-box-shadow: 2px 2px 10px 2px #000000; 
    box-shadow: 2px 2px 10px 2px #000000;
    &:hover {
      background-color: #FFC14D;
      color: white;
    }
    ${laptop({ padding: "10px" })}
    ${tablet({ padding: "10px" })}
    ${mobile({ padding: "10px" })}
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
