import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setAllCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("No Country found!");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const filteredCountries = allCountries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRegion =
        selectedRegion === "" || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });

    setCountries(filteredCountries);
  }, [searchQuery, selectedRegion, allCountries]);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  if (loading) {
    return (
      <div className="text-center text-2xl font-semibold mt-10">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 text-2xl font-semibold mt-10">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Explore Countries
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search for a country..."
          className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-lg mt-4 md:mt-0 w-full md:w-1/4"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {countries.length > 0 ? (
          countries.map((country) => (
            <div
              key={country.cca3}
              className="country-card bg-amber-50 border border-gray-300 rounded-lg shadow-lg overflow-hidden"
            >
             
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {country.name.common}
                </h3>
                <p className="text-gray-600">Region: {country.region}</p>
                <p className="text-gray-600">
                  Capital: {country.capital ? country.capital[0] : "N/A"}
                </p>
                <Link
                  to={`/countries/${country.name.common}`}
                  className="text-blue-600 hover:text-blue-800 mt-4 block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-2xl font-semibold mt-10 text-red-600">
            Country not found!
          </h1>
        )}
      </div>
    </div>
  );
};
export default Countries;
