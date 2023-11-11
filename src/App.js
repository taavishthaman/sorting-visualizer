import Header from "./components/Header";
import SortingArea from "./components/SortingArea";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <SortingArea />
    </Provider>
  );
}

export default App;
