import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImg from "../assets/banner2.png";
import { fallbackBlogs } from "../data/mockData";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [errorNews, setErrorNews] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1500, once: false });

    // Fetch blog posts
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        setBlogs(
          data.map((item) => ({
            title: item.title,
            snippet: item.content?.substring(0, 100) + "...",
            image: item.imageUrl || bannerImg,
          }))
        );
      } catch (err) {
        console.error("Blog fetch error:", err);
        setBlogs(fallbackBlogs);
      } finally {
        setLoadingBlogs(false);
      }
    };

    // Fetch property news from NewsAPI
    const fetchNews = async () => {
      const apiKey = "YOUR_NEWSAPI_KEY"; // Replace with your actual key
      const query = "bristol property";
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&language=en&pageSize=5&sortBy=publishedAt&apiKey=${apiKey}`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();
        setNews(data.articles || []);
      } catch (err) {
        console.error("News fetch error:", err);
        setErrorNews("Unable to load Bristol property news.");
      } finally {
        setLoadingNews(false);
      }
    };

    fetchBlogs();
    fetchNews();
  }, []);

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto space-y-16">
      {/* Blog Header */}
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
        <p className="text-gray-600 mt-2">
          Insights, property news, and tips for home buyers.
        </p>
      </div>

      {/* Blog Cards */}
      {loadingBlogs ? (
        <div className="text-center py-20 text-lg">Loading blogs...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      )}

      {/* News Section */}
      <div data-aos="fade-up">
        <h3 className="text-2xl font-semibold mt-20 mb-6">
          Bristol Property News
        </h3>

        {loadingNews ? (
          <div className="text-center text-lg">Loading news...</div>
        ) : errorNews ? (
          <div className="text-center text-red-500">{errorNews}</div>
        ) : (
          <ul className="space-y-6">
            {news.map((article, idx) => (
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
                <span className="text-sm text-gray-500">
                  Source: {article.source?.name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Blog;
