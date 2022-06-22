import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const MealList = () => {
  const [meals, setMeals] = useState([]);

  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((res) => res.json())
      .then((json) => setMeals(json.meals));
  }, [name]);

  console.log(meals);

  return (
    <section className="detailListContainer">
      This is MealList
      {meals.map((el, i) => (
        <MealItem
          i={i}
          key={i}
          id={el.idMeal}
          name={el.strMeal}
          img={el.strMealThumb}
        />
      ))}
    </section>
  );
};

export default MealList;
