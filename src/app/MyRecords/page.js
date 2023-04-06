'use client'
import { useEffect, useState } from 'react';

const MyRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      const data = await response.json();
      setRecords(data);
      setLoading(false);
    };
    fetchRecords();
  }, []);

  const handleDeleteRecord = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DELETE_COUNTRY_API_ENDPOINT}${id}/delete/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setRecords(records.filter((record) => record.id !== id));
      } else {
        console.error('Failed to delete record:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="container mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : records.length === 0 ? (
        <h2 className="text-2xl font-bold mb-4  mt-8 text-center">NO RECORDS AVAILABLE</h2>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {records.map((record) => (
            <div
              key={record.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="text-lg font-medium">{record.name}</h3>
              <p className="text-gray-600">{record.date}</p>
              <button
                className="mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={() => handleDeleteRecord(record.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecords;
