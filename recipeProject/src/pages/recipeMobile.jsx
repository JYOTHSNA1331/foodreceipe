import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";
const RecipeM = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "summary" ? "active" : ""}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </Button>

        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instruction
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <div className="ingredientPadding">
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </div>
        )}

        {activeTab === "summary" && (
          <div style={{ paddingTop: "10px" }}>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    padding-top: 10px;
    font-size: 1.2rem;
    line-height: 2.5rem;
    padding-right: 90px;
    @media (max-width: 768px) {
      padding-right: 0px;
    }
  }

  ul {
    margin-top: 2rem;
  }

  img {
    width: 75%;
    heigth: 75%;
    object-fit: cover;
    border: 1px solid #50cb93;
    border-radius: 4px;
    padding: 5px;
  }
  img:hover {
    box-shadow: 0 0 2px 2px #f06292;
  }
  h3 {
    font-style: normal;
    font-size: 19px;
    line-height: 3rem;
    ${"" /* overflow-wrap: break-word; */}
    font-weight: 300;
  }
  div {
    min-width: 40%;
    display: inline-block;
  }
`;

const Button = styled.button`
  padding: 1rem;
  color: #313131;
  background: #ffc0c7;
  border: 2px solid #ffc0c7;
  margin-right: 2rem;
  font-weight: 600;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: #ff9e9e;
    color: white;
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }

  ${
    "" /* &:hover ${Button} {
    background: linear-gradient(35deg, #494949, #313131);
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  } */
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-right: 0.5rem;
  }
`;

const Info = styled.div`
  margin-left: 2rem;
  div {
    background: rgba(255, 255, 255, 0.5);
    padding: 0rem 1.4rem 0.5rem;
    margin-top: 1rem;
    margin-right: 1rem;
    border-radius: 5px;
    list-style: none;
    display: block;

    .ingredientPadding {
      padding-right: 12rem;
    }

    @media (max-width: 768px) {
      margin: 1rem;
      font-size: 0.8rem;
    }
  }
  div:hover {
    box-shadow: 0 0 2px 3px rgb(192, 238, 228);
  }

  @media (max-width: 768px) {
    margin: 0.3rem;
  }
`;

export default RecipeM;
