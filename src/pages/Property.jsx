import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import BlogCard from "../components/BlogCard";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImg from "../assets/banner2.png";
import { fallbackProperties, fallbackBlogs } from "../data/mockData";


const Property = () => {
  const [properties, setProperties] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1500, once: false });

    const fetchData = async () => {
      try {
        const [propertyRes, blogRes] = await Promise.all([
          fetch("http://localhost:5000/api/properties"),
          fetch("http://localhost:5000/api/blogs"),
        ]);
    
        if (!propertyRes.ok || !blogRes.ok) {
          throw new Error("Failed to fetch data from one or more endpoints.");
        }
    
        const propertyData = await propertyRes.json();
        const blogData = await blogRes.json();
    
        setProperties(
          propertyData.map((item) => ({
            title: item.title,
            desc: item.description,
            image: item.imageUrl || bannerImg,
          }))
        );
    
        setBlogs(
          blogData.map((item) => ({
            title: item.title,
            snippet: item.content.substring(0, 100) + "...",
            image: item.imageUrl || bannerImg,
          }))
        );
      } catch (err) {
        console.error("API fetch error:", err);
        console.error("Unable to load from API. Showing demo data instead.");
        setProperties(fallbackProperties);
        setBlogs(fallbackBlogs);
      } finally {
        setLoading(false); 
      }
    };    

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto space-y-16">
      {/* <Banner image={bannerImg} text="Find Your Bristol Property" /> */}

      <section>
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Trending Properties for You</h2>
          <p className="text-gray-600 mt-2">Discover the most sought-after listings this week.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
          {properties.map((property, idx) => (
            <PropertyCard key={idx} {...property} />
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
          <p className="text-gray-600 mt-2">Insights, Bristol property news, and home-buying tips.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2" data-aos="fade-up">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Property;
