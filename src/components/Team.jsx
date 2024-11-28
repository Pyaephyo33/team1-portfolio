import React, { useEffect, useState } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa"; // Importing social icons

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON file
    fetch("/src/data/teamData.json")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error loading team data:", error));
  }, []);

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl font-semibold mb-2">Team</h2>
        <p className="text-gray-600">
          We are a dynamic team of five professionals united by passion and purpose.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {/* Render the first 3 members */}
        {teamMembers.slice(0, 3).map((member) => (
          <div
            key={member.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-brandPrimary hover:text-white"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-24 w-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500 mb-4">{member.position}</p>
            <div className="flex justify-center gap-4 mt-4">
              {/* GitHub Icon */}
              <a
                href={member.github}
                className="text-gray-600 hover:text-black transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              {/* Email Icon */}
              <a
                href={`mailto:${member.email}`}
                className="text-gray-600 hover:text-red-500 transition-all"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1 mt-6">
        {/* Render the last 2 members */}
        {teamMembers.slice(3).map((member) => (
          <div
            key={member.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-brandPrimary hover:text-white"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-24 w-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500 mb-4">{member.position}</p>
            <div className="flex justify-center gap-4 mt-4">
              {/* GitHub Icon */}
              <a
                href={member.github}
                className="text-gray-600 hover:text-black transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              {/* Email Icon */}
              <a
                href={`mailto:${member.email}`}
                className="text-gray-600 hover:text-red-500 transition-all"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
