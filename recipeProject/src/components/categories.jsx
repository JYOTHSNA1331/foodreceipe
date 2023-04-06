import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components"; //Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically
import { NavLink } from "react-router-dom";
export default function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"} style={{ marginRight: "0rem" }}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 1rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-derection: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transform: scale(0.8);
  display: block;
  text-align: center;

  &:hover {
    box-shadow: 0 0 2px 3px #f06292;
  }

  h4 {
    color: white;
    font-size: 0.5rem;
    position: relative;
    top: 1rem;
  }

  svg {
    color: yellow;
    font-size: 1.5rem;
    position: relative;
    top: 1rem;
  }

  &.active {
    // we are using the active class to style that by default have provided by react-router-dom in NavLink

    background: linear-gradient(to right, #f27121, #e94057);

    //when we select other SLink it converts back to white down
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
