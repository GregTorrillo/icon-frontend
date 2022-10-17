import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { laptop } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 55px;
  padding: 20px 0px 50px 310px;
  ${laptop({ fontSize: "44px", padding: "20px 0px 0px 40px" })}
  ${tablet({ fontSize: "44px", padding: "20px" })}
  ${mobile({ fontSize: "38px", padding: "50px 0px 20px 0px", textAlign: "center" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 290px;
  ${laptop({ padding: "0px 20px" })}
  ${tablet({ padding: "0px 10px" })}
  ${mobile({ padding: "0px 10px" })}
`;

const Filter = styled.div`
  margin: 20px;
  ${tablet({ margin: "10px" })}
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
 
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px", fontSize: "16px", paddingBottom: "10px", textAlign: "center" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${tablet({ margin: "0px 5px" })}
  ${mobile({ margin: "5px 0px", padding: "10px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>gold</Option>
            <Option>purple</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>5</Option>
            <Option>6</Option>
            <Option>7</Option>
            <Option>8</Option>
            <Option>9</Option>
            <Option>10</Option>
            <Option>11</Option>
            <Option>12</Option>
            <Option>13</Option>
            <Option>14</Option>
            <Option>15</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
