import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";
const Recipe = () => {
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
    <DetailWrapper style={{ textAlign: "center" }}>
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
          <div style={{ paddingTop: "10px" }}>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <div>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </div>
        )}

        {activeTab === "summary" && (
          <BackgroundDiv style={{ paddingTop: "10px" }}>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          </BackgroundDiv>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;

  display: flex;

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
    float: left;
  }

  ul {
    margin-top: 2rem;
  }

  img {
    width: 75%;
    heigth: 75%;
    object-fit: cover;
  }
  h3 {
    font-style: normal;
    font-size: 19px;
    line-height: 3rem;
    overflow-wrap: break-word;
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
  background: white;
  border: 2px solid black;
  margin: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

const BackgroundDiv = styled.div`
  background: black;
`;

export default Recipe;
