import "../styling/css/index.css";

function App({name, description, preview}) {
  return (
    <>
      <section className="search">
        <div className="intro">
          <h1>{name}</h1>
          <p>
            {description}
          </p>
        </div>
        <form
          action="javascript:void(0)"
          method="get"
          className="form-container"
        >
          <input
            className="form-input"
            type="url"
            placeholder="Input website URL here..."
            name=""
            id=""
          />
          <input className="btn search-btn" type="submit" value="Preview" />
        </form>
      </section>
      <section className="preview">
        <div className="navigation">
          <ul className="item-menu">
            <li className="option active">
              <span className="icon">
                <img src="./img/pc-icon.svg" alt="PC" />
              </span>
              Desktop
            </li>
            <li className="option">
              <span className="icon">
                <img src="./img/tablet-icon.svg" alt="Tablet" />
              </span>
              Tablet
            </li>
            <li className="option">
              <span className="icon">
                <img src="./img/mobile-icon.svg" alt="PC" />
              </span>
              Mobile
            </li>
          </ul>
        </div>
        <div className="canvas">
          <div className="screen">
            <img
              className="desktop-mockup"
              src="./img/laptop.png"
              alt="Desktop Preview"
            />
            <div className="display desktop">
              <iframe src="https://icodethis.com/" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
