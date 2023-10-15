import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Giftpage from "../GiftPage/Giftpage";
import HomePage from "../HomePage/HomePage";
import Panier from "../Panier/Panier";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/panier",
    component: <Panier />,
  },
  {
    path: "/list",
    component: <Giftpage />,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
