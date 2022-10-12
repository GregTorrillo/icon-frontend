import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { laptop } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${tablet({ height: "50vh"})}
  ${mobile({ height: "30vh"})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${mobile({width: "30px", height: "30px" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${tablet({ height: "50vh"})}
  ${mobile({ height: "30vh"})}
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100vw;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const InfoContainer = styled.div`
  top: 0;
  padding: 200px 0px 0px 100px;
  position: absolute;
  color: black;
  ${laptop({ padding: "50px 0px 0px 40px"})}
  ${tablet({ padding: "50px 0px 0px 50px"})}
  ${mobile({ padding: "10px 0px 0px 20px"})}
`;

const Title = styled.h1`
  font-size: 55px;
  ${laptop({ fontSize: "36px"})}
  ${tablet({ fontSize: "34px"})}
  ${mobile({ fontSize: "18px"})}
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
  ${laptop({ fontSize: "18px", letterSpacing: "1px", margin: "15px 0px"})}
  ${tablet({ fontSize: "20px", letterSpacing: "1px", margin: "10px 0px"})}
  ${mobile({ fontSize: "12px", letterSpacing: "0px", margin: "5px 0px"})}
`;

const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  color: black;
  border: 2px solid black;
  &:hover {
    background-color: #FFC14D;
  }
  ${laptop({ fontSize: "14px", padding: "10px"})}
  ${tablet({ fontSize: "16px"})}
  ${mobile({ fontSize: "6px", padding: "5px"})}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/products/men">
              <Button>SHOP NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
