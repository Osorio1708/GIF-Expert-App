import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Death Note", "Dragon Ball"]);
  const onAddCategory = (newCategory) => {
    // setCategories( cat => [...categories,"Valorant"])
    // setCategories([...categories, "Valorant"]);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // onAddCategory={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      <button onClick={onAddCategory}>Agregar</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
