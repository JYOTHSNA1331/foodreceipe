import Home from "./home";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Cuisine from "./cuisine";
import Searched from "./searched";
import Recipe from "./recipe";
import RecipeM from "./recipeMobile";
import { AnimatePresence } from "framer-motion";

export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:typo" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<RecipeM />} />
      </Routes>
    </AnimatePresence>
  );
}

/*
    <AnimatePresence exitBeforeEnter> // all the route which needs fade in and fade out need to be wrap in theAnimatePresence. exitBeforeEnter will fade out before teh other page renders
      <Routes Location={location} key={location.pathname}> // this will detect the when the component or page is mounted and unMountes
       
*/
