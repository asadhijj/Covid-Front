import React from 'react';
import moment from 'moment';

function CountryData({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div key={item.Date} className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="font-bold text-lg">{moment(item.Date).format('LL')}</h3>
          <p className="text-gray-700">Confirmed Cases: {item.Cases}</p>
        </div>
      ))}
    </div>
  );
}

export default CountryData;