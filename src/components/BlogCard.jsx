import React from "react";

const BlogCard = ({ title, snippet, image }) => (
  <div className="flex bg-white shadow-md rounded-xl overflow-hidden">
    <img src={image} alt={title} className="w-1/3 object-cover" />
    <div className="p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{snippet}</p>
      </div>
      <a href="#" className="text-indigo-600 text-sm mt-2 hover:underline">Read More →</a>
    </div>
  </div>
);

export default BlogCard;