import React, { useEffect, useState } from "react";

const PropertyNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "928603b95d6d471d961275216eb7deab"; // 🔐 Replace this
      const url = `https://newsapi.org/v2/everything?q=bristol%20property&language=en&pageSize=5&sortBy=publishedAt&apiKey=${apiKey}`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("News fetch failed");

        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError("Unable to load news right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading news...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="mt-20" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-4">Latest Bristol Property News</h3>
      <ul className="space-y-6">
        {articles.map((article, idx) => (
          <li key={idx} className="border-b pb-4">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              <h4 className="text-lg font-medium">{article.title}</h4>
            </a>
            <p className="text-gray-700">{article.description}</p>
            <span className="text-sm text-gray-500">Source: {article.source.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyNews;
