import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CategoryItem from './CategoryItem';

const CategoryList = () => {

    const [data, setData] = useState([])
    const [random, setRandom] = useState([]);

    let test;

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => res.json())
            .then((json) => setData(json.categories));
    }, [test]);

    console.log(data);


    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((json) => setRandom(json.meals[0]));
    }, [test]);

    console.log(random);

    const randomId = random.idMeal;



    return (
        <section className="categoryListContainer">
            <h1>Or go through our categories</h1>

            {data.map((el, i) =>
                <CategoryItem
                    key={i}
                    id={el.idCategory}
                    name={el.strCategory}
                    img={el.strCategoryThumb}
                />
            )}

            <Link to={`/detail/${randomId}`}>
                <div className="randomContainer">
                    <h3>Random</h3>
                </div>
            </Link>
        </section>
    );
}

export default CategoryList;