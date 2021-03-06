import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import UserLinks from "../UserLinks";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => props.theme.brand};

  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    font-weight: 200;
    color: black;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      margin-bottom: 20px;
    }

    span {
      display: none;
    }
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <section>
          <Link className="nav-link" to="/">
            {" "}
            Lời nói đầu{" "}
          </Link>
          <Link className="nav-link" to="/covid-19-nguy-hiểm-dến-dau">
            {" "}
            Mục lục{" "}
          </Link>
          <Link className="nav-link" to="/about">
            {" "}
            Đóng góp và Góp ý{" "}
          </Link>
        </section>
        <span>
          <UserLinks />
        </span>
      </NavContainer>
    );
  }
}

export default Navigation;
