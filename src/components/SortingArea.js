import styled from "styled-components";
import { useEffect } from "react";
import Bar from "./Bar";
import { useDispatch, useSelector } from "react-redux";
import { setNumbers } from "../sortingSlice";

const Area = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 80px);
  gap: 1px;
`;

function SortingArea() {
  const dispatch = useDispatch();
  const { numbers, isSorting, isComplete } = useSelector((state) => state.sort);

  useEffect(() => {
    if (!isSorting && !isComplete) {
      const arr = [];
      for (let i = 0; i < 130; i++) {
        let num = Math.floor(Math.random() * 90) + 1;
        arr.push(num);
      }

      dispatch(setNumbers(arr));
    }
  }, [isSorting, isComplete, dispatch]);

  return (
    <>
      <Area>
        {numbers && numbers.map((num, i) => <Bar key={i} height={num} />)}
      </Area>
    </>
  );
}

export default SortingArea;
