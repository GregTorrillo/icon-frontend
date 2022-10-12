import React from 'react'
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { laptop } from "../responsive";

const Container = styled.div`
  height: 40vh;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  ${laptop({ fontSize: "26px"})}
  ${tablet({ fontSize: "30px"})}
  ${mobile({ fontSize: "22px" })}
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  ${laptop({ textAlign: "center", fontSize: "14px", padding: "0px" })}
  ${tablet({ textAlign: "center", fontSize: "16px", padding: "0px" })}
  ${mobile({ textAlign: "center", fontSize: "14px", padding: "0 25px" })}
`;

const Disclaimer = styled.div`
  font-size: 14px;
  padding-top: 10px;
  font-weight: 300;
  ${laptop({ textAlign: "center", fontSize: "12px", padding: "10px" })}
  ${mobile({ textAlign: "center", fontSize: "10px", padding: "10px 40px" })}
`;

const InputContainer = styled.div`
  width: 25%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${laptop({ width: "40%" })}
  ${tablet({ width: "50%" })}
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #FFC14D;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Sign Up For News & Promotions</Title>
      <Desc>Be the first to hear about new releases, special offers and more.</Desc>
      <InputContainer>
        <Input placeholder="Email Address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
      <Disclaimer>Opt out at any time by clicking Unsubscribe at the bottom of any of our emails.</Disclaimer>
    </Container>
  );
}

export default Newsletter