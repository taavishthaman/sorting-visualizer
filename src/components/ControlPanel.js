import styled from "styled-components";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  setAlgorithm,
  setReset,
  setNumbers,
  setSorting,
  setComplete,
} from "../sortingSlice";

const StyledControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 80px;
  height: 38px;
  background-color: #9bbec8;
  border-radius: 5px;

  &:hover {
    background-color: #9bbec0;
  }
`;

const sortingAlgorithms = [
  {
    value: "bubble_sort",
    label: "Bubble Sort",
  },
  {
    value: "insertion_sort",
    label: "Insertion Sort",
  },
  {
    value: "selection_sort",
    label: "Selection Sort",
  },
  {
    value: "merge_sort",
    label: "Merge Sort",
  },
  {
    value: "quick_sort",
    label: "Quick Sort",
  },
  {
    value: "heap_sort",
    label: "Heap Sort",
  },
];
function ControlPanel() {
  const { numbers, algorithm, isSorting, isComplete } = useSelector(
    (state) => state.sort
  );

  const dispatch = useDispatch();

  async function bubbleSort() {
    let arr = [...numbers];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          await wait();
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
          let newArr = [...arr];
          dispatch(setNumbers(newArr));
        }
      }
    }
  }

  async function merge(arr, s, e) {
    let mid = Math.floor((s + e) / 2);
    let i = s;
    let j = mid + 1;

    let temp = [];

    while (i <= mid && j <= e) {
      if (arr[i] < arr[j]) {
        temp.push(arr[i]);
        i++;
      } else {
        temp.push(arr[j]);
        j++;
      }
    }

    while (i <= mid) {
      temp.push(arr[i]);
      i++;
    }

    while (j <= e) {
      temp.push(arr[j]);
      j++;
    }

    let k = 0;

    for (let i = s; i <= e; i++) {
      await wait();
      arr[i] = temp[k];
      let newArr = [...arr];
      dispatch(setNumbers(newArr));
      k++;
    }

    let newArr = [...arr];
    dispatch(setNumbers(newArr));
  }

  async function mergeSort(arr, s, e) {
    if (s >= e) {
      return;
    }

    const mid = Math.floor((s + e) / 2);
    await mergeSort(arr, s, mid);
    await mergeSort(arr, mid + 1, e);
    await merge(arr, s, e);
  }

  async function mergeSortWrapper() {
    let arr = [...numbers];
    let n = arr.length;

    await mergeSort(arr, 0, n - 1);
  }

  async function sort() {
    if (isSorting || isComplete) return;
    if (algorithm === "bubble_sort") {
      dispatch(setSorting());
      await bubbleSort();
      console.log("Here....");
      dispatch(setComplete());
    } else if (algorithm === "merge_sort") {
      dispatch(setSorting());
      await mergeSortWrapper();
      console.log("Here....");
      dispatch(setComplete());
    }
  }

  async function wait() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(true);
      }, 10);
    });
  }

  function changeAlgorithm(option) {
    if (isSorting) return;
    dispatch(setAlgorithm(option.value));
  }

  function reset() {
    if (isSorting) return;
    dispatch(setReset());
  }

  return (
    <StyledControlPanel>
      <StyledButton onClick={sort}>Sort</StyledButton>
      <StyledButton onClick={reset}>Reset</StyledButton>
      <Select
        options={sortingAlgorithms}
        placeholder={"Algorithm"}
        onChange={changeAlgorithm}
        styles={{
          option: (baseStyles) => ({
            ...baseStyles,
            color: "grey",
          }),
        }}
      />
    </StyledControlPanel>
  );
}

export default ControlPanel;
