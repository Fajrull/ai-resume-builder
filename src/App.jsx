import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainRoute from "./routes/MainRoute";

function App() {

  return (
    <RouterProvider router={MainRoute}/>
  );
}

export default App;
