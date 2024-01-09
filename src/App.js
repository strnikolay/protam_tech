import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home  from './components/home/home';
import Catalog from "./components/catalog/catalog";
import ErrorPage from "./components/404/404";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      //element: <ErrorPage />,
      //errorElement: <ErrorPage />,
    },
    {
      path: "/catalog",
      element: <Catalog />,
    },
  ]);



  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App; 
