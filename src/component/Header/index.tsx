import "./Header.css";
import styled from "styled-components";
import Logo from "../../assets/joovence-logo.png";

const LogoDisplay = styled.img`
  width: 20%;
  display: flex;
  margin: auto;
`;

const HeaderContainer = styled.div`
  font-size: 1.3rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer data-test="component-header">
      <LogoDisplay src={Logo} data-test="header-logo" alt="Logo Joovence" />
      <h1>Choose your doctor and availabilities</h1>
    </HeaderContainer>
  );
};

export default Header;
