import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setLoading(false);
      setCountries(res.data);
    });
  }, []);

  if (loading) {
    return "Loading...";
  }

  console.log(countries);
  console.log(...Object.values(countries[61].languages));

  return (
    <>
      <div className="home-container">
        <h1>Ma super page de recherche</h1>
        <div className="countries-container">
          {countries.map((country) => {
            return (
              <div key={country.ccn3}>
                <div className="flag">{country.flag}</div>
                <div className="continent">{country.continents}</div>
                <p>Liste des langues parlées :</p>
                {/* <ul>
                {country.languages.Object.values.map()}
              </ul> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
