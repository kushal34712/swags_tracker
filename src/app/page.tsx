"use client";

import React, { useEffect, useState } from "react";
import { TrackingData } from "@/types";
import SearchForm from "./_components/search_form";
import TrackingCard from "./_components/tracking_card";

const App: React.FC = () => {
  const [data, setData] = useState<TrackingData[]>([]);
  const [searchResults, setSearchResults] = useState<TrackingData[] | null>(
    null
  );

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=ze3qeDp9hX2OMF0GFdX_8ZMQEIFCs1cyzJUnREbOZQh7nFQiXEQTlhTmiFLy9GZCns1b7ady_WkkdLdwa_2hX2q4xBfvEw4Im5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIZfinuPdc-yX5YwbRJcl57koDXP114QZybHp5zQF_6uBlOzuShAH2hSWbU-zd77F3X-NyVt3D7Z9ZXdXl6pPs6T2lZpHbJPztz9Jw9Md8uu&lib=MUd3-mxYkGPFsHme-aSKiif7q7TfTXGkp"
    )
      .then((res) => res.json())
      .then((data) => setData(data.flat()));
  }, []);

  const handleSearch = (input: string) => {
    const results = data.filter(
      (item) => item.Id === input || item[" Pincode"]?.toString() === input
    );
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Swags Tracker</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="mt-6 w-full">
        {searchResults ? (
          <>
            <p className="text-center">{searchResults.length} results found</p>
            <div className="grid grid-cols-1 md:grid-cols-4">
            {searchResults.map((item) => (
              <TrackingCard key={item.Id} data={item} />
            ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">No results found</p>
        )}
      </div>
    </div>
  );
};

export default App;
