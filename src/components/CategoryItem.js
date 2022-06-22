import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CategoryItem = ({ img, id, name, i }) => {


    return (

        <Link to={`/category/${name}`} >
            <section className="categoryItemContainer" style={{ backgroundColor: i % 2 === 0 ? "#ffab61e8" : "#FF6E85" }}>
                <h1>{name}</h1>
                <img src={img} alt={img} />
            </section>
        </Link>


    );
}

export default CategoryItem;
