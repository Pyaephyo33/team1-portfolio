import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/agile_team.jpg';
import banner2 from '../assets/banner2.png';
import PropertyCard from '../components/PropertyCard';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const properties = [
    { title: "Modern Apartment 1", desc: "2 Bed · 2 Bath · 1,200 sqft", image: banner1 },
    { title: "Modern Apartment 2", desc: "3 Bed · 2 Bath · 1,400 sqft", image: banner2 },
    { title: "Modern Apartment 3", desc: "1 Bed · 1 Bath · 900 sqft", image: banner1 },
    { title: "Modern Apartment 4", desc: "4 Bed · 3 Bath · 2,000 sqft", image: banner2 }
  ];

  const blogs = [
    { title: "Buying Your First Home", snippet: "Tips for new buyers", image: banner1 },
    { title: "Real Estate Trends 2025", snippet: "What's hot this year", image: banner2 }
  ];

  return (
    <div id="home" className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen">
        {/* Flowbite Carousel Section */}
        <Carousel className="w-full mx-auto h-[600px]">
          {/* First Banner */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 md:ps-16">
              <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey leading-snug uppercase">
                Collaborating is the <span className="text-brandPrimary">KEY</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Bringing ideas together to achieve project goals—where teamwork meets innovation.
              </p>
              {/* Add smooth scroll to Property Section */}
              <ScrollLink to="property" spy={true} smooth={true} offset={-100} className="text-indigo-600 cursor-pointer">
                Explore Our Properties
              </ScrollLink>
            </div>
            <div className="md:w-1/2">
              <img src={banner1} alt="Banner" className="w-full h-auto m-auto shadow-lg" />
            </div>
          </div>

          {/* Second Banner */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 md:ps-16">
              <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey leading-snug uppercase">
                UNITING <span className="text-brandPrimary">MINDS</span> MINDS, <span className="text-brandPrimary">ACHIEVING GOALS</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                By combining our strengths, we turn challenges into opportunities.
              </p>
              {/* Add smooth scroll to Blog Section */}
              <ScrollLink to="blog" spy={true} smooth={true} offset={-100} className="text-indigo-600 cursor-pointer">
                Read Latest Blogs
              </ScrollLink>
            </div>
            <div className="md:w-1/2">
              <img src={banner2} alt="Banner" className="w-3/4 m-auto h-auto shadow-lg" />
            </div>
          </div>
        </Carousel>

        {/* Property Section */}
        <section id="property" className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Trending Properties</h2>
            <p className="text-gray-600 mt-2">Discover the most sought-after listings this week.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {properties.map((property, idx) => (
              <PropertyCard key={idx} {...property} />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
            <p className="text-gray-600 mt-2">Insights, market trends, and home-buying tips.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
