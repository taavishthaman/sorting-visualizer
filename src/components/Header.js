import styled from "styled-components";
import ControlPanel from "./ControlPanel";

const StyledHeader = styled.div`
  height: 80px;
  width: 100%;
  background-color: #427d9d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Orbitron";
  font-weight: 700;
  color: #ddf2fd;
  padding: 0 20px;
`;

const HeadingText = styled.p`
  font-size: 32px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeadingText>Sorting Visualizer</HeadingText>
      <ControlPanel />
    </StyledHeader>
  );
}

export default Header;
