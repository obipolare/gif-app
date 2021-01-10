import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Black Clover"]);

  return (
    <>
      <header>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
      </header>

      {categories.map((el) => (
        <GifGrid key={el} category={el} />
      ))}
    </>
  );
};

export default GifExpertApp;
