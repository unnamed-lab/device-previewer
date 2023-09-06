import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import "../styling/css/index.css";
import desktopIcon from "../assets/desktop-icon.svg";
import tabletIcon from "../assets/tablet-icon.svg";
import mobileIcon from "../assets/mobile-icon.svg";
import desktopImg from "../assets/laptop.png";
import tabletImg from "../assets/tablet.png";
import mobileImg from "../assets/mobile.png";

const data = {
  name: "Unnamed Device Previewer",
  description: `Elevate your website optimization process with our Device Screen Previewer. Simply input your website's link, click "Preview," and instantly visualize it. Effortlessly toggle between device modes to see how your site adapts to various screen resolutions, ensuring a seamless user experience across all devices.`,
  preview: [
    {
      title: "desktop",
      icon: desktopIcon,
      img: desktopImg
    },
    {
      title: "tablet",
      icon: tabletIcon,
      img: tabletImg
    },
    {
      title: "mobile",
      icon: mobileIcon,
      img: mobileImg
    },
  ],
};

// document.getElementsByTagName('title').textContent = data.name

ReactDOM.createRoot(document.querySelector(".navbar")).render(
  <React.StrictMode>
    <Nav name={data.name} />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>
);
