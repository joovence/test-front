import "./Header.css";
import styled from "styled-components";
import Logo from "../../assets/joovence-logo.png";
import { Link } from "react-router-dom";

const LogoDisplay = styled.img`
  width: 20%;
  display: flex;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 90%;
    font-size: 2rem;
  } ;
`;

const HeaderContainer = styled.div`
  font-size: 1.1rem;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  } ;
`;

const Header = () => {
  return (
    <HeaderContainer data-test="component-header">
      <Link to="/availabilities">
        <LogoDisplay src={Logo} data-test="header-logo" alt="Logo Joovence" />
      </Link>
      <h1>Choose your doctor and availabilities</h1>
    </HeaderContainer>
  );
};

export default Header;
