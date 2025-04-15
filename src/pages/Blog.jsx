import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImg from "../assets/banner2.png";
import { fallbackBlogs } from "../data/mockData";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1500, once: false });

    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

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
        console.error("Unable to load blog posts. Showing demo data instead.");
        setBlogs(fallbackBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto space-y-16">
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
        <p className="text-gray-600 mt-2">
          Insights, property news, and tips for home buyers.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-20 text-lg">Loading blogs...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" >
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 mt-4">{error}</div>
      )}
    </div>
  );
};

export default Blog;
