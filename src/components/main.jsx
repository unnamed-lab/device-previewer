import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import "../styling/css/index.css";
import desktopImg from "../assets/desktop-icon.svg";
import tabletImg from "../assets/tablet-icon.svg";
import mobileImg from "../assets/mobile-icon.svg";


const data = {
  name: "Unnamed Device Previewer",
  description: `Elevate your website optimization process with our Device Screen
            Previewer. Simply input your website's link, click "Preview," and
            instantly visualize it. Effortlessly toggle between device modes to
            see how your site adapts to various screen resolutions, ensuring a
            seamless user experience across all devices.`,
  preview: {
    desktop: {
      title: "desktop",
      img: desktopImg
    },
    tablet: {
      title: "tablet",
      img: tabletImg
    },
    mobile: {
      title: "mobile",
      img: mobileImg
    }
  }
};

document.getElementsByTagName('title').textContent = data.name

ReactDOM.createRoot(document.getElementByTagName("nav")).render(
  <React.StrictMode>
    <Nav name={data.name} />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>
);
