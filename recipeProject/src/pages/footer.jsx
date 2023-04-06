import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Fot>
      <Wrapper>
        <div style={{ display: "block", margin: "auto", textAlign: "center" }}>
          <h4>FOLLOW US ON SOCIAL MEDIA</h4>
          <FontAwesomeIcon className="size colorF" icon={faFacebookF} />
          <FontAwesomeIcon className="size colorY" icon={faYoutube} />
          <FontAwesomeIcon className="size colorT" icon={faTwitter} />
          <FontAwesomeIcon className="size colorI" icon={faInstagram} />
          <FontAwesomeIcon className="size colorL" icon={faLinkedin} />
        </div>
        <Contact>
          <h4>CONTACT US</h4>
          <p>Phone: 123-456-7890</p>
          <p>Email: INFO@Delicious.org</p>
          <p>841 WORCESTER ST #332 NATICK </p>
        </Contact>
      </Wrapper>
      <CopyRight>
        <h5>© 2022 Delicious. All Rights Reserved.</h5>
        <p>Privacy Policy</p>
      </CopyRight>
    </Fot>
  );
}

const Fot = styled.div`
  padding: 5rem;
  display: block;
  background-color: rgba(255, 99, 71, 0.2);

  ${
    "" /* background: black;
  color: white; */
  }
  h4 {
    display: block;
  }
  .size {
    width: 2rem;
    height: 2rem;
    margin-right: 0.8rem;
    margin-bottom: 1rem;
  }
  .size:hover {
    color: #ff0000;
  }
  .colorF {
    color: #1877f2;
  }
  .colorL {
    color: #0a66c2;
  }
  .colorY {
    color: #cd201f;
  }
  .colorI {
    color: #e4405f;
  }
  .colorT {
    color: #1da1f2;
  }
`;

const CopyRight = styled.div`
  display: block;
  text-align: center;
  hover {
    color: pink;
  }
`;

const Contact = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  margin: 0% 5%;
  @media (max-width: 768px) {
    display: block;
    margin: 0% 3%;
  }
`;

export default Footer;
