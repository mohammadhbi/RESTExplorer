import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // برای دریافت پارامتر از URL
import axios from 'axios';

const CountryDetails = () => {
  const { countryName } = useParams(); // نام کشور از URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        setCountry(response.data[0]);
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryDetails();
  }, [countryName]); // هر بار که نام کشور تغییر کند، اطلاعات جدید بارگذاری می‌شود

  if (loading) {
    return <div className="text-center text-2xl font-semibold mt-10">Loading...</div>;
  }

  if (!country) {
    return <div className="text-center text-xl">Country not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">{country.name.common}</h2>
      <img
        src={country.flags[0]}
        alt={`${country.name.common} flag`}
        className="w-full h-48 object-cover rounded-lg mb-6"
      />
      <p className="text-xl text-gray-800 mb-4"><strong>Region:</strong> {country.region}</p>
      <p className="text-xl text-gray-800 mb-4"><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p className="text-xl text-gray-800 mb-4"><strong>Population:</strong> {country.population}</p>
      <p className="text-xl text-gray-800"><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;


