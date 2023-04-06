import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch> </FaSearch>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  width: 100%;
  position: relative;
  text-align: center;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 1rem;
    width: 60%;
    margin-top: 5rem;
    @media (max-width: 768px) {
      width: 80%;
    }
  }

  svg {
    position: absolute;
    top: 80%;
    right: 77%;

    transform: translate(100%, -50%);
    color: white;
    @media (max-width: 768px) {
      right: 84%;
    }

    &:hover {
      box-shadow: 0 0 2px 3px #c0eee4;
    }
  }
`;

export default Search;
