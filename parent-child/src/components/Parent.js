import React, { useState } from "react";

import classes from "./Parent.module.css";

import Child from "./Child";

const Parent = () => {
  const [query, setQuery] = useState("");
  const [newMovie, setNewMovie] = useState({});

  const handleSubmit = () => {
    console.log("submit", newMovie);
    //alert(movie);
    setNewMovie({});
    setQuery("");
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const onDropdownHandler = (movie) => {
    setNewMovie(movie);
    console.log("received from child", newMovie);
  };

  return (
    <div className={classes.contain}>
      <div className={classes.searchbar}>
        <form onSubmit={handleSubmit}>
          <label className={classes.label}>
            Movie:
            <input className={classes.input} type="text" value={query} onChange={handleChange} />
          </label>
          <input className={classes.button} type="submit" value="OK" />
        </form>
      </div>

      <div className={classes.row}>
        {query && <Child onDropdownHandler={onDropdownHandler} query={query} />}
      </div>

      <div className={classes.row}>
          FAVORITES
      </div>
    </div>
  );
};

export default Parent;
