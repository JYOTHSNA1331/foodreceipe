import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components"; //Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggi() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    //   const check = localStorage.getItem("veggie");

    //   if (check) {
    //     setVeggie(JSON.parse(check));
    //   } else {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
    ); //fecthing the api data form the api get request(end point) and the we need to attached the api key to the end point with ? and specify the number of the recipes we want to get
    const data = await api.json(); //`await` is used to wait for the promise to be resolved and then we can use the data to convert it to json format

    //    localStorage.setItem("veggie", JSON.stringify(data.recipes)); //if data is not there then we are seting into localStroage

    setVeggie(data.recipes);
    console.log(data.recipes);
    //  }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: window.innerWidth < 480 ? 1 : 3,
            arrows: false,
            pagination: true,
            drag: window.innerWidth < 480 ? "true" : "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p> {recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
console.log(window.innerWidth);
const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3 {
    margin-bottom: 10px;
  }
`;

const Card = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;

    position: absolute;
    left: 0;
    width: 100%;
    heigth: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggi;
