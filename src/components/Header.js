import logo from "./../images/tasty-logo-04 1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setInput("");
  };

  return (
    <section className="headerContainer">
      <Link to={"/"}>
        <img src={logo} alt={logo} />
      </Link>

      <p>Find a recipe,an idea,an inspiration...</p>
      <form onSubmit={handleChange} action="">
        <input
          type="search"
          placeholder="Type something to search"
          // value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Link to={`/search/${input}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </section>
  );
};

export default Header;
