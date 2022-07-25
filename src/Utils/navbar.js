import Home from "../Components/Home";
import Products from "../Components/Products";
import SignIn from "../Pages/SignIn";
import SignUp from "../Components/SignUp";
import Generic from "../Generic";
import MyProducts from "../Pages/MyProducts";
import UserSettings from "../Pages/UserSettings";

export const navbar = [
  {
    id: 1,
    path: "/home",
    element: <Home />,
  },
  {
    id: 2,
    path: "/products",
    element: <Products />,
  },
  {
    id: 3,
    path: "/login",
    element: <SignIn />,
  },
  {
    id: 4,
    path: "/signup",
    element: <SignUp />,
  },
  {
    id: 5,
    path: "/about-me",
    element: <Generic />,
  },
  {
    id: 6,
    path: "/my-products",
    element: <MyProducts />,
  },
  {
    id: 7,
    path: "/user-settings",
    element: <UserSettings />,
  },
];
