import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpert() {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpert</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((categorie, index) => {
          return <GifGrid key={categorie} category={categorie} />;
        })}
      </ol>
    </>
  );
}

export default GifExpert;
