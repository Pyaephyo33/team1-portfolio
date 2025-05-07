import React, { useEffect, useState } from 'react';
import fallbackImg from '../assets/property.jpg';
import { fallbackRecommendations, fallbackUserInfo } from '../data/mockData';

const AI = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch AI Recommendations
        const recRes = await fetch('http://localhost:5000/api/ai-recommendations');
        if (!recRes.ok) throw new Error('Failed to fetch recommendations');
        const recData = await recRes.json();
        setRecommendations(recData);
      } catch (err) {
        console.error('Recommendation fetch error:', err);
        setRecommendations(fallbackRecommendations);
      }

      try {
        // Fetch User Info
        const userInfoRes = await fetch('http://localhost:5000/api/user-info/1');
        if (!userInfoRes.ok) throw new Error('Failed to fetch user info');
        const userInfoData = await userInfoRes.json();
        setUserInfo(userInfoData);
      } catch (err) {
        console.error('User info fetch error:', err);
        setUserInfo(fallbackUserInfo);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 lg:px-14 py-16 max-w-screen-2xl mx-auto space-y-10">
      <h1 className="text-3xl font-semibold text-center">AI-Based Property Recommendations</h1>
      <p className="text-center text-gray-600">Based on your browsing behavior and interests, we recommend the following properties:</p>

      {/* User Information */}
      {userInfo && (
        <div className="bg-white border rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">👤 User Profile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Nickname:</span>
              <span>{userInfo.nickname}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Last Name:</span>
              <span>{userInfo.lastname}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Email:</span>
              <span>{userInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">MBTI:</span>
              <span>{userInfo.mbti}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Income:</span>
              <span>£{userInfo.income}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Demographic:</span>
              <span>{userInfo.demographic}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Family Size:</span>
              <span>{userInfo.familySize}</span>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations */}
      {loading ? (
        <p className="text-center">Loading recommendations...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((property, index) => (
            <div key={index} className="shadow-lg p-4 rounded-lg bg-white">
              <img
                src={property.imageUrl || fallbackImg}
                alt={property.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
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
