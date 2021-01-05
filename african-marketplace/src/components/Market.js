import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
const list = [
  { name: "apple" },
  { name: "banana" },
  { name: "orange" },
  { name: "oranges" },
];
const Market = () => {
  const [search, setSearch] = useState({ input: "" });
  const [display, setDisplay] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setDisplay(list.filter((item) => item.name === search.input));
  }, [search]);
  
  return (
    <div>
      <input
        style={{
          borderWidth: "0px 0px 1px 0px",
          outline: "none",
          marginLeft: "15%",
          marginTop: "2.5%",
        }}
        onChange={handleChange}
        type="text"
        name="input"
        value={search.input}
        placeholder="Search"
      />
      <div>
        {display.map((item) => {
          return <ItemCard name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Market;
