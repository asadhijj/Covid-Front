"use client";

import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import CountryData from "./CountryData";

export default function HomePage() {
  const [worldTotalData, setWorldTotalData] = useState(null);
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19api.com/world/total")
      .then((response) => response.json())
      .then((data) => setWorldTotalData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://api.covid19api.com/country/${country}/status/confirmed?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setData(data);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 text-center">World Total Statistics</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {worldTotalData && (
            <>
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-gray-500 font-medium">
                  Total Confirmed Cases
                </p>
                <h2 className="text-gray-900 font-bold text-2xl">
                  {worldTotalData.TotalConfirmed}
                </h2>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-gray-500 font-medium">Total Deaths</p>
                <h2 className="text-gray-900 font-bold text-2xl">
                  {worldTotalData.TotalDeaths}
                </h2>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-gray-500 font-medium">
                  Total Recovered Cases
                </p>
                <h2 className="text-gray-900 font-bold text-2xl">
                  {worldTotalData.TotalRecovered}
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="max-w-xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="country" className="text-gray-700 font-bold mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="border border-gray-500 rounded-lg py-2 px-4"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="start-date"
              className="text-gray-700 font-bold mb-2"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              className="border border-gray-500 rounded-lg py-2 px-4"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="end-date" className="text-gray-700 font-bold mb-2">
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              className="border border-gray-500 rounded-lg py-2 px-4"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </form>

        {data.length > 0 && <CountryData data={data} />}
      </div>
    </>
  );
}
