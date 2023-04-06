import Pages from "./pages/Pages";
import Category from "./components/categories";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Delicious</Logo>
          {/* <img src={require("./images/navPic.jpg")} /> */}
        </Nav>
        <ComponentMargin>
          <Search />
          <Category />
          <Pages />
        </ComponentMargin>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;

  &:hover {
    color: #f56eb3;
  }
  ${"" /* background-color: rgba(255, 99, 71, 0.2); */}
  ${
    "" /* position:fixed;
  top:0; */
  }

  svg {
    //for styling the GiKnifeFork use svg
    font-size: 2rem;
  }

  ${
    "" /* img {
    width: 70%;
    heigth: 400%;
    opacity: 0.5;
  } */
  }
  ${
    "" /* img:hover {
    opacity: 1;
  } */
  }
`;

const ComponentMargin = styled.div`
  margin: 0% 20%;

  @media screen and (max-width: 1200px) {
    body {
      margin: 0% 0%;
    }
    margin: 0% 1%;
  }
`;

export default App;
