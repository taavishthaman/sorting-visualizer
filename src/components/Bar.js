import styled from "styled-components";

const StyledBar = styled.div`
  width: 10px;
  height: ${(props) => props.height * 7.5 + "px"};
  display: inline-block;
  background-color: aliceblue;
  border: 1px solid black;
  border-top: 0px;
  background-color: #9bbec8;
`;

function Bar({ height }) {
  return <StyledBar height={height}></StyledBar>;
}

export default Bar;
