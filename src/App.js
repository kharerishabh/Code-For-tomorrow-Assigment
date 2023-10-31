import SideBar from "./components/SideBar";
import MainBar from "./components/MainBar";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./redux-store/store"
function App() {
  return (
    <Provider store={appStore}>
    <div className="bg-gray-400 flex">
     <SideBar/>
     <MainBar/>
    </div>
    </Provider>
  );
}

export default App;
