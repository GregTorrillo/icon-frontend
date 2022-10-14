import React from 'react'
import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { laptop } from "../responsive";

const Container = styled.div`
  padding: 0 300px 200px 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${laptop({ padding: "0px 150px 150px 150px"})}
  ${tablet({ padding: "0px 10px 150px 10px"})}
  ${mobile({ padding: "0px 10px 100px 10px", justifyContent: "center" })}
`;

const Title = styled.h1`
    color:black;
    font-size: 40px;
    padding: 50px 0px 50px 310px;
    ${laptop({ padding: "50px 0px 50px 160px", fontSize: "32px"})}
    ${tablet({ padding: "100px 0px 50px 60px"})}
    ${mobile({ textAlign: "center", fontSize: "28px", padding: "50px 0px 20px 0px" })}
`; 

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://icon-api.onrender.com/api/products?category=${cat}`
            : "https://icon-api.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
    <Title>LIMITED RELEASES</Title>
    <Container>
    {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
  </Container>
  </>
  )
}

export default Products