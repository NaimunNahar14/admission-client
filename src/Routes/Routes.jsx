import {
  createBrowserRouter

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SingleClass from "../Pages/Home/SingleClass";
import College from "../Pages/College/College";
import CollegeDetails from "../Pages/College/CollegeDetails";
import Admission from "../Pages/Admission";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../ErrorPage";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'class/:id',
          element:<PrivateRoutes> <SingleClass></SingleClass></PrivateRoutes>
         
        },
        {
          path:'/colleges',
          element:<College></College>
        },
        {
          path: 'class/:id',
          element:<CollegeDetails></CollegeDetails>

        },
        {
          path: '/admission',
          element:<Admission></Admission>
        },
        {
          path: '/login',
          element:<Login></Login>

        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
    ]
  },
]);
