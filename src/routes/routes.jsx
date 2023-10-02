import React from "react";

import Landing from "../pages/Landing";
import Search from "../pages/Search";
import Details from "./../pages/Details";

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/search/:keyword", element: <Search /> },
  { path: "/movie/:id", element: <Details /> },
];
