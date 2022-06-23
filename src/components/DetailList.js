import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const DetailList = () => {
  const [detail, setDetail] = useState([]);
  const [youTube, setYouTube] = useState(true);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((json) => setDetail(json.meals[0]));
  }, [id]);

  // console.log(detail);

  const instructionsList = () => {
    const instArr = detail.strInstructions.split(".");
    instArr.pop();
    // console.log(instArr);

    const instlist = instArr.map((elt, i) => (
      <li key={i} className="instructionsList">
        {elt}.
      </li>
    ));
    return <ul style={{ fontSize: "1.2rem" }}>{instlist}</ul>;
  };

  const ingredientsList = () => {
    let ingredients = [];
    let measures = [];
    for (let i = 1; i < 21; i++) {
      let requestIngredient = "strIngredient" + i;

      let requestMeasure = "strMeasure" + i;
      let ingredient = detail[requestIngredient];
      let measure = detail[requestMeasure];

      if (ingredient.value !== "") {
        ingredients.push(ingredient);
      }
      if (measure.value !== "") {
        measures.push(measure);
      }
    }
    // console.log(measures);
    // console.log(ingredients);
    const measuresInstructions = measures.map((item, i) => (
      <h3 key={i}>
        {item} {ingredients[i]}
      </h3>
    ));
    return <div className="ingredientsDiv">{measuresInstructions}</div>;
  };

  return (
    <section className="detailListContainer">
      <div>
        <img src={detail.strMealThumb} alt="Alt" />
        <div className="descriptionContainer">
          <div>
            <h1>{detail.strMeal}</h1>
            {detail.strInstructions ? instructionsList() : null}
          </div>
          <div>
            <h1>Ingredients</h1>

            {detail.strInstructions ? ingredientsList() : null}

            <button onClick={() => setYouTube(!youTube)}>Watch on YouTube</button>

          </div>
        </div>
        {youTube ? (
          <iframe
            // style={{ display: youTube ? "block" : "none" }}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "50%", height: "250px" }}
            src={
              detail.strYoutube
                ? `https://www.youtube.com/embed/${detail.strYoutube.slice(32)}`
                : null
            }
            frameBorder="0"
          />
        ) : null}
      </div>
    </section>
  );
};

export default DetailList;
