import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = housesData.map((house) => house.country);

    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    setCountries(uniqueCountries);
    
    const allProperties = housesData.map((house) => house.type);
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
  
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
  
    const minPrice = parseInt(price.split(" ")[0]);

    const maxPrice = parseInt(price.split(" ")[2]);
  
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
  
      if (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      ) {
        return true; // 
      }
  
      return false; 
    });
    
//  console.log("New Houses:", newHouses)
    
    setTimeout(() => {
      if (newHouses.length < 1) {
        setHouses([]);
      } else {
        setHouses(newHouses);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
