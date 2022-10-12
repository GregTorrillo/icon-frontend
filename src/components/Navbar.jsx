import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { laptop } from "../responsive";

const Container = styled.div`
  height: 7vh;
  padding: 0 70px;
  border: 0.5px solid lightgray;
  ${laptop({ padding: "10px 20px" })}
  ${tablet({ padding: "0px" })}
  ${mobile({ height: "55px", padding: "0px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", margin: "0px 10px" })}
`;

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "gray", fontSize: 16 }}/>
          </SearchContainer>
        </Left>
        <Center>
        <Link to="/">
         <Logo><img src="/img/icon-logo.png" alt="" width={140} height={70}/></Logo> 
         </Link>
        </Center>
        <Right>
        <Link to="/register" style={linkStyle}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
