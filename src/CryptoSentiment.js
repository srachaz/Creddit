import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoSentiment = ({ cryptoSymbol }) => {
  const [sentimentScore, setSentimentScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiKey = 'ulekxueicnunothqnprkijmhox2ay9snwidqnldo'; // Your actual API key
    // Constructing the API URL with additional query parameters
    const apiUrl = `https://cryptonews-api.com/api/v1/stat?&tickers=${encodeURIComponent(
      cryptoSymbol
    )}&date=last30days&page=1&cache=false&token=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // Assuming the response data structure
        if (response.data.total && response.data.total[cryptoSymbol]) {
          setSentimentScore(response.data.total[cryptoSymbol]['Sentiment Score']);
        } else {
          setSentimentScore(null);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch sentiment data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, [cryptoSymbol]);

  if (loading) {
    return <div>Loading sentiment score...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{cryptoSymbol.toUpperCase()}</h2>
      {sentimentScore !== null ? (
        <p className="text-gray-600">
          <span className="font-semibold">{sentimentScore}</span><br/>
        </p>
      ) : (
        <p className="text-gray-500">No sentiment score available</p>
      )}
    </div>
  );
};

export default CryptoSentiment;
