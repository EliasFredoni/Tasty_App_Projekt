import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import CategoryItem from "./CategoryItem";
import AuthContext from "../context/AuthContext";

const CategoryList = () => {
  const { data, randomId } = useContext(AuthContext);

  return (
    <section className="categoryListContainer">
      <h1>Or go through our categories <a href="arrow1"><span>↓</span></a></h1>
      <div className="categoryList">
        {data.map((el, i) => (
          <CategoryItem
            key={i}
            id={el.idCategory}
            name={el.strCategory}
            img={el.strCategoryThumb}
          />
        ))}

        <Link to={`/detail/${randomId}`}>
          <div className="randomContainer">
            <h3>Random</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryList;
