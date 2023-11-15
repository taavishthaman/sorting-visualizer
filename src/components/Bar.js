import styled from "styled-components";

const StyledBar = styled.div`
  width: 50px;
  height: ${(props) => props.height * 7.5 + "px"};
  display: inline-block;
  //background-color: #9bbec8;
  background: linear-gradient(to bottom, #bae8e8, #2c698d);
`;

function Bar({ height }) {
  return <StyledBar height={height}></StyledBar>;
}

export default Bar;
