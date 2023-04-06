'use client'
import { useState, useEffect } from 'react';

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      setCountries(data.Countries);
    };
    fetchCountries();
  }, []);

  const handleAddToMyRecords = async (country) => {
    try {
      const data = {
        name: country.Country,
        total_confirmed_cases: country.TotalConfirmed,
        total_deaths_cases: country.TotalDeaths,
        total_recovered_cases: country.TotalRecovered,
        date: new Date().toISOString().slice(0, 10),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CREATE_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      console.log("Country added successfully:", responseData);
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  return (
    <>
    <h2 className="text-2xl font-bold mb-4  mt-8 text-center">Covid-19 Statistics For All Countries</h2>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {countries.map((country) => (
        <div
          key={country.CountryCode}
          className="border border-gray-300 rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{country.Country}</h3>
            <p className="text-gray-600">
              Total Confirmed Cases: {country.TotalConfirmed}
            </p>
            <p className="text-gray-600">
              Total Deaths Cases: {country.TotalDeaths}
            </p>
            <p className="text-gray-600">
              Total Recovered Cases: {country.TotalRecovered}
            </p>
            <p className="text-gray-600">Date: {country.Date}</p>
          </div>
          <div className="bg-gray-100 p-4 flex justify-center items-center">
            <button
              className="bg-[#576F72] hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 "
              onClick={() => handleAddToMyRecords(country)}
            >
              Add to My Records
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default AllCountries;
