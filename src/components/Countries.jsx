import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // وارد کردن Link

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl font-semibold mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">Explore Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {countries.map((country) => (
          <div
            key={country.cca3}
            className="country-card bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={country.flags[0]}
              alt={`${country.name.common} flag`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{country.name.common}</h3>
              <p className="text-gray-600">Region: {country.region}</p>
              <p className="text-gray-600">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
              <Link
                to={`/countries/${country.name.common}`} // مسیر به صفحه جزئیات کشور
                className="text-blue-600 hover:text-blue-800 mt-4 block"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

