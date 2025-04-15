import React, { useEffect, useState } from 'react';

const AI = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching analysis data
    const fetchAIRecommendations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ai-recommendations'); // Replace with your real endpoint
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error("Error fetching AI recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAIRecommendations();
  }, []);

  return (
    <div className="px-4 lg:px-14 py-16 max-w-screen-2xl mx-auto space-y-10">
      <h1 className="text-3xl font-semibold text-center">AI-Based Property Recommendations</h1>
      <p className="text-center text-gray-600">Based on your browsing behavior and interests, we recommend the following properties:</p>

      {loading ? (
        <p className="text-center">Loading recommendations...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((property, index) => (
            <div key={index} className="shadow-lg p-4 rounded-lg bg-white">
              <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600">{property.description}</p>
              <p className="text-sm mt-2 text-gray-400">{property.reason}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AI;
