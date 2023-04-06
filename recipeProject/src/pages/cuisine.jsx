import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    //  const check = localStorage.getItem("targetCuisine");

    //    if (check) {
    //      setCuisine(JSON.parse(check));
    //    } else {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`
    );
    const recipesV = await data.json();
    console.log(recipesV);
    //      localStorage.setItem("targetCuisine", JSON.stringify(recipesV.results));

    setCuisine(recipesV.results);
    //    }
  };

  useEffect(() => {
    getCuisine(params.typo);
    console.log(params.typo);
  }, [params.typo]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  text-align: center;
  img {
    width: 70%;
    border-radius: 2rem;
    text-align: center;
    margin: auto;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    font-size: 0.7rem;
  }
`;
