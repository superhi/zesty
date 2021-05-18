import React from "react";
import "./styles.css";

const App = () => {
  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Fieldling
        </h2>
      </header>

      <figure>
        <figcaption></figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
