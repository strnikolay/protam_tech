import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Main  from './components/main/main';
//import About from "./components/about/about";
import ErrorPage from "./components/404/404";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      //element: <Main/>,
      element: <ErrorPage />,
      //errorElement: <ErrorPage />,
    },
    /*{
      path: "/about",
      element: <About />,
    },*/
  ]);



  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App; 
