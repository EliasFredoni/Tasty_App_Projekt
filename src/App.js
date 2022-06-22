import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailList from "./components/DetailList";
import MealList from "./components/MealList";
import Main from "./pages/Main";
import RandomItem from "./components/RandomItem";
import "./App.scss";
import { AuthContextProvider } from "./context/AuthContext";
import Search from "./components/Search";
import LightDark from "./components/LightDark";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <LightDark />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:name" element={<MealList />} />
          <Route path="/detail/:id" element={<DetailList />} />
          <Route path="/search/:input" element={<Search />} />
          {/* <Route path="/search" element={<RandomItem />} /> */}
        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
