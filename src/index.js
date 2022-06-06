import { createRoot } from "react-dom/client";
import React from "react";
import GifExpert from "./GifExpert";
import "./index.css";
import "animate.css";
const root = createRoot(document.querySelector("#root"));
root.render(<GifExpert />);
