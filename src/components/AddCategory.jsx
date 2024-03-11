import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({
  //onAddCategory
  onNewCategory,
}) => {
  const [inputValue, setInputValue] = useState("");

  //   const onInputChange = (text) => {
  //     setInputValue(text);
  //   };

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    // console.log(event);
    // Previene que se recargue la página

    event.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;

    //onAddCategory((categories) => [...categories, inputValue]);

    onNewCategory(value);
    setInputValue("");
  };

  return (
    // <form onSubmit={(event) => onSubmit(event)}>

    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
