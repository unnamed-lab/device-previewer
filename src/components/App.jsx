import React, { useEffect, useState } from "react";
import "../styling/css/index.css";

const App = ({ name, description, preview }) => {
  const [searchLink, setSearchLink] = useState(
    sessionStorage.getItem("search") || "Input website URL here..."
  );
  React.useEffect(() => {
    sessionStorage.setItem("search", searchLink);
  }, [searchLink]);

  const sWidth = window.innerWidth;

  const onlyDesktop = () => {
    if (sWidth >= 768) {
      return <Preview preview={preview} linkInput={searchLink} />;
    } else {
      return (
        <h4
          className="text-center mx-auto"
          style={{ textTransform: "capitalize" }}
        >
          This feature is not yet available.
          <br />
          Please try again later.
        </h4>
      );
    }
  };

  return (
    <>
      <Search
        name={name}
        info={description}
        onSearch={setSearchLink}
        searchLink={searchLink}
      />

      {onlyDesktop()}
    </>
  );
};

const Search = ({ name, info, onSearch, searchLink }) => {
  const sv = document.getElementById("linkSearch");

  return (
    <section className="search">
      <div className="intro">
        <h1>{name}</h1>
        <p>{info}</p>
      </div>
      <form action="javascript:void(0)" method="get" className="form-container">
        <input
          id="linkSearch"
          className="form-input"
          type="url"
          placeholder={searchLink}
          name=""
          onDoubleClick={() => (sv.value = searchLink)}
          required
        />
        <input
          className="btn search-btn"
          type="submit"
          value="Preview"
          onClick={() => onSearch(sv.value)}
        />
      </form>
    </section>
  );
};

const Preview = ({ preview, linkInput }) => {
  const [listActive, setListActive] = useState(`${preview[0].title}-select`);
  const [canvas, setCanvas] = useState(listActive);
  console.log(canvas);

  const navigation = () => {
    return preview.map((item, key) => {
      return (
        <Navigation
          key={key}
          url={item.icon}
          title={item.title}
          getActive={listActive}
          setActive={setListActive}
          setCanvas={setCanvas}
        />
      );
    });
  };

  const getNav = () => {
    async function fetchData() {
      setTimeout(() => {
        try {
          const navOption = document.querySelector(`#${listActive}`);
          navOption.classList.add("active");
        } catch (error) {
          console.log("Error: ", error);
        }
      });
    }
    fetchData();
  };

  const getCanvas = (canvasID) => {
    let sType;
    let i;
    switch (canvasID) {
      case "desktop-select":
        sType = "desktop";
        i = 0;
        break;
      case "tablet-select":
        sType = "tablet";
        i = 1;
        break;
      case "mobile-select":
        sType = "mobile";
        i = 2;
        break;
    }

    return <Canvas 
    preview={preview} 
    url={linkInput} 
    type={sType} 
    index={i} 
    />;
  }

  return (
    <section className="preview">
      <div className="navigation">
        <ul className="item-menu">
          {navigation()}
          {(function () {
            getNav();
          })()}
        </ul>
      </div>
      {getCanvas(canvas)}
    </section>
  );
};

const Navigation = ({ key, url, title, getActive, setActive, setCanvas }) => {
  const assignActive = (event) => {
    const cur = event.target.id;
    const active = document.querySelector(`#${getActive}`);
    active.classList.contains("active") === true ? active.classList.remove("active") : null;
    document.querySelector(`#${cur}`).classList.add("active");
    setActive(cur);
    setCanvas(cur);
  };
  return (
    <li
      key={key}
      id={`${title}-select`}
      className={"option"}
      onClick={assignActive}
    >
      <span className="icon">
        <img src={url} alt={title} />
      </span>
      {title}
    </li>
  );
};

const Canvas = ({ preview, url, type, index }) => {
  return (
    <div className="canvas">
      <div className="screen">
        <img
          className={`${type}-mockup`}
          src={preview[index].img}
          alt={`${"Desktop"} Preview`}
        />
        <div className={`display ${type}`}>
          <iframe src={url}></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
